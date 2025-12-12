import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Hero.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started - 5min ⏱️
            </Link>
            <Link
              className="button button--primary button--lg"
              to="https://github.com/AyeshaNasirWebDeveloper/Heckathon-AI-Book"
              style={{ marginLeft: '1rem', backgroundColor: 'var(--color-gold)', color: 'black' }}>
              GitHub
            </Link>
          </motion.div>
        </div>
        <motion.div
          className={styles.robotAnimationPlaceholder}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          {/* Example floating robot (replace with actual robot images/SVGs) */}
          <motion.img
            src="/Heckathon-AI-Book/img/robot-head.png"
            alt="Robot Head"
            className={styles.floatingRobot}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Add more robots/layers here */}
        </motion.div>
      </div>
    </header>
  );
}

export default HomepageHeader;
