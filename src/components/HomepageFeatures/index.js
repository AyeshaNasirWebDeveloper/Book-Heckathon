import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Future of Robotics',
    Image: require('@static/img/robot-1.jpeg'),
    description: (
      <>
        Explore advanced humanoid robotics and understand how intelligent
        machines interact with the physical world.
      </>
    ),
  },
  {
    title: 'AI-Powered Automation',
    Image: require('@static/img/robot-2.jpeg'),
    description: (
      <>
        Learn how modern robots use Artificial Intelligence to analyze,
        respond, and perform real-world tasks with precision.
      </>
    ),
  },
  {
    title: 'Next-Gen Innovation',
    Image: require('@static/img/robot-3.jpeg'),
    description: (
      <>
        Step into the future with cutting-edge technologies that merge AI and
        robotics for smarter, faster systems.
      </>
    ),
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <img src={Image} className={styles.featureImg} alt={title} />
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
