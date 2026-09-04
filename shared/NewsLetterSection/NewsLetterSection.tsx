/* eslint-disable */
"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { NewsletterSuccessModal, NewsLetterFailureModal } from "@/shared/Modals";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import styles from "./NewsLetterSection.module.scss";

const NewsLetterSection = () => {
    const newsLetterRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: newsLetterRef,
        offset: ["start end", "end center"]
    });

    const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openErrorModal, setOpenErrorModal] = useState<boolean>(false);
    const isLoading = status === "loading";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setStatus("error");
                const errMsg = data.error || "Something went wrong. Please try again.";
                setMessage(errMsg);
                setOpenErrorModal(true);
                toast.error(errMsg);
                return;
            }
            setStatus("success");
            setOpenModal(true);
            setFormData({ firstName: "", lastName: "", email: "" });
        } catch (error: any) {
            setStatus("error");
            setOpenErrorModal(true);
            const errMsg = "Network error. Please check your connection and try again.";
            setMessage(errMsg);
            toast.error(errMsg);
            console.error("API Error: ", error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setOpenErrorModal(false);
        setStatus("idle");
    };

    return (
        <React.Fragment>
            <div id="newsletter" ref={newsLetterRef} className={styles.newsletter_wrapper}>
                <motion.div style={{ y, opacity }} className={styles.newsletter_card}>
                    <div className={styles.corner_top_left} />
                    <div className={styles.corner_top_right} />
                    <div className={styles.corner_bottom_left} />
                    <div className={styles.corner_bottom_right} />
                    <div className={styles.bg_pattern}></div>
                    <div className={styles.content_container}>
                        <h1>
                            Subscribe to <br className={styles.mobile_br} />
                            <span>Our newsletter</span>
                        </h1>
                        <p className={styles.description}>
                            Subscribe to our newsletter for insights, industry updates, thought
                            leadership, and the latest developments shaping digital governance,
                            public sector innovation, and technology across Africa.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.subscription_form}>
                            <div className={styles.inputs_group}>
                                <div className={styles.name_fields}>
                                    <input type="text" name="firstName" required placeholder="First Name" value={formData.firstName}
                                        onChange={handleChange} className={styles.input_field}
                                    />
                                    <input type="text" name="lastName" required placeholder="Last Name" value={formData.lastName}
                                        onChange={handleChange} className={styles.input_field}
                                    />
                                </div>
                                <input type="email" name="email" required placeholder="Email address" value={formData.email}
                                    onChange={handleChange} className={styles.input_field}
                                />
                            </div>
                            
                            <button disabled={isLoading} type="submit" className={styles.submit_btn}>
                                {isLoading ? (
                                    <BeatLoader size={8} color="white" />
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </form>

                        <p className={styles.agreement_text}>
                            By clicking subscribe, I agree to receive the latest news and updates from Govtech Africa
                        </p>
                    </div>
                </motion.div>
            </div>

            <NewsletterSuccessModal open={openModal} closeModal={handleCloseModal} />
            <NewsLetterFailureModal open={openErrorModal} closeModal={handleCloseModal} message={message} />
        </React.Fragment>
    );
};

export default NewsLetterSection;