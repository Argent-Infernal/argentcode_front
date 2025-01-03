import React from "react";
import styles from "./Preloader.module.scss";
import Image from "next/image";

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <Image
                src="/logo_loading.svg"
                alt="Loading"
                width={450}
                height={450}
                priority
            />
        </div>
    );
};

export default Preloader;