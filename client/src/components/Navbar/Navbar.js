import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.NavbarContainer}>
			<span>TodoNotes 📝</span>
			<span className={styles.NavbarNavs}>
				<ul>
					<li className={styles.NavbarNav}>Add</li>
					<li className={styles.NavbarNav}>Delete</li>
				</ul>
			</span>
		</div>
	);
};

export default Navbar;
