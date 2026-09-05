"use client";
import React, { useState, useEffect, useRef } from "react";
import { NavLink, NavLinkMenu, NavLinkSub } from "@/interfaces";
import { navLinks } from "@/mock/navLists.mock";
import { Logo } from "..";
import { scrollTo } from "@/utils/scrollTo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

enum Scroll {
	Idle = "idle",
	InitialScroll = "initial"
}
interface HeaderProps {
	type?: "new" | "default";
}

const Header = ({ type = "default" }: HeaderProps) => {
	const router = useRouter();
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [mobile, setMobile] = useState<boolean>(false);
	const [showList, setShowList] = useState<string | null | undefined>(undefined);
	const [scroll, setScroll] = useState<Scroll>(Scroll.Idle);
	const [activeLink, setActiveLink] = useState<string | null>(null);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const headerHeight: number = headerRef.current?.offsetHeight as number;
		const scrollCheck = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > headerHeight) {
				setScroll(Scroll.InitialScroll);
			}
			if (currentScrollY <= headerHeight) setScroll(Scroll.Idle);
		};
		window.addEventListener("scroll", scrollCheck, { passive: true });

		return () => window.removeEventListener("scroll", scrollCheck);
	}, []);

    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 950);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

	const handleActiveLink = (label: string) => {
		setActiveLink(prev => (prev === label ? null : label));
	};

	const handleScroll = (id?: string) => {
		if (mobile && (id === "services" || id === "solutions")) {
			setCollapsed(false);
			return;
		}
		setCollapsed(true);
		if (!id) return;
		scrollTo({ id });
		setShowList(undefined);
	};

	return (
		<header ref={headerRef} className={styles.header} data-scroll={scroll}
			data-collapsed={!collapsed || scroll === Scroll.InitialScroll}
		>
			<div className={styles.container}>
				<Link href="/">
					<div className={styles.header_logoContainer}>
						<Logo />
					</div>
				</Link>
				<div className={styles[!collapsed ? "header_wrapper" : "header_wrapper__collapsed"]}>
					<nav data-type={type} className={styles.header_nav}>
						<ul className={styles.header_navList}>
							{navLinks.map((link: NavLink, index: number) => {
								return (
									<LinkItem link={link} key={index} index={index} collapsed={collapsed} showList={showList}
										setCollapsed={setCollapsed} setShowList={setShowList} isActive={activeLink === link.label}
										handleActiveLink={handleActiveLink} handleScroll={handleScroll}
									/>
								);
							})}
							<div className={styles.contact_btn_sm} onClick={() => {
									router.push('/contact');
									setCollapsed(true);
								}}
							>
								<p>contact us</p>
							</div>
						</ul>
					</nav>
				</div>
				<div onClick={() => router.push('/contact')} className={styles.contact_btn}>
					<p>contact us</p>
				</div>
				<div onClick={() => setCollapsed(!collapsed)} className={styles[collapsed ? "header_hamburger" : "header_hamburger__open"]}>
					<span className={styles.header_hamburgerBar}></span>
					<span className={styles.header_hamburgerBar}></span>
					<span className={styles.header_hamburgerBar}></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
interface LinkProps {
	link: NavLink;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
	setShowList: React.Dispatch<React.SetStateAction<string | null | undefined>>;
	showList: string | null | undefined;
	collapsed: boolean;
	isActive: boolean;
	handleActiveLink: (label: string) => void;
	handleScroll: (id?: string) => void;
	index: number;
	type?: "new" | "default";
}
const LinkItem = ({
	link,
	collapsed,
	handleActiveLink,
	isActive,
	handleScroll,
	index,
	setCollapsed,
	showList,
	setShowList
}: LinkProps) => {
	const router = useRouter();
	useEffect(() => {
		if (!collapsed) {
			handleActiveLink("");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [collapsed]);
	return (
		<li className={styles.header_navLink} data-active={isActive} onMouseLeave={() => setShowList(undefined)}>
			<div className={styles.link_row}>
				<p onClick={() => {
						if (index === 0) {
							setCollapsed(true);
							router.push(`/what-we-do`);
						}
						if (index === 1) {
							setCollapsed(true);
							router.push(`/who-we-are`);
						}
						// if (index === 2) {
						// 	setCollapsed(true);
						// 	router.push(`/insights`);
						// }
					}}
				>
					{link?.label}
				</p>
				{link.subMenu?.length ? (
					<div className={styles.link_icon} onClick={(e) => {
							e.stopPropagation();
							handleActiveLink(link?.label)
						}}
					>
						<Image src="/svgs/arrow.svg" fill alt="" sizes="100%" />
					</div>
				) : null}
				{link.subMenu?.length ? (
					<div className={styles.link_icon_sm} onClick={(e) => {
							e.stopPropagation();
							handleActiveLink(link?.label)
						}}
					>
						<Image src="/svgs/arrow.svg" fill alt="" sizes="100%" />
					</div>
				) : null}
			</div>
			{link.subMenu?.length ? (
				<div className={styles.subMenu_container} data-active={link.label === "sell gears" || link.label === "rent out"}>
					<div className={styles.subMenu}>
						{link.subMenu.map((subMenu: NavLinkSub, index: number) => (
							<div data-type={subMenu?.id} className={styles.subMenu_navlist} key={index}>
								{subMenu.href ? (
									<Link href={subMenu.href} className={styles.subMenu_link}
										onClick={() => {
											handleScroll(subMenu.id);
											setCollapsed(true);
										}}
										onMouseEnter={() => setShowList(undefined)}
									>
										<h2 data-label={subMenu.label}>{subMenu.label}</h2>
										{subMenu.icon && (
											<div className={styles.subMenu_icon}>
												<Image fill alt="" sizes="100vw" src={subMenu.icon} />
											</div>
										)}
									</Link>
								) : (
									<div className={styles.subMenu_link} onMouseEnter={() => {
											handleScroll(subMenu.id);
											setShowList(subMenu?.id);
										}}
									>
										<h2 data-label={subMenu.label}>{subMenu.label}</h2>
										{subMenu.icon && (
											<div className={styles.subMenu_icon}>
												<Image fill alt="" sizes="100vw" src={subMenu.icon} />
											</div>
										)}
									</div>
								)}
								<div className={styles.line} />
								<ul style={{ display: showList === subMenu.id ? "flex" : "none" }} data-type={showList === subMenu.id ? "true" : "false"} className={styles.sub_list}>
									{subMenu.menu?.map(
										(menu: NavLinkMenu, index: number) => (
											<React.Fragment key={index}>
												<Link target={menu?.external ? "_blank" : "_self"} href={menu.href ?? ''} className={styles.subMenu_link}
													onClick={() => {
														handleScroll(menu.id);
														handleActiveLink("");
													}}
												>
													<p>{menu.label}</p>
													{menu.icon && (
														<div className={styles.subMenu_icon}>
															<Image src={menu.icon} fill alt="" sizes="100vw" />
														</div>
													)}
												</Link>
												<div className={styles.line} />
											</React.Fragment>
										)
									)}
								</ul>
							</div>
						))}
					</div>
				</div>
			) : null}
		</li>
	);
};
