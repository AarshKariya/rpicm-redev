import styles from './ExploreCourses.module.scss'
import NextLink from "next/link";

const ExploreCourses = () => {
    return (
        <div className={styles.exploreCourses}>
            <img
                src="/exploreCourses1.svg"
                alt="exploreCourses1"
                className={styles.imageWithoutText}
            />
            <img
                src="/exploreCourses2.svg"
                alt="exploreCourses2"
                className={styles.imageWithoutText}
            />
            <div className={styles.imageAndText}>
                <NextLink href="/courses">
                    <img
                        src="/exploreCourses3.svg"
                        alt="exploreCourses3"
                        className={styles.imageWithText}
                    />
                    <div className={styles.text}>
                    Explore Courses
                    </div>
                </NextLink>
            </div>
        </div>
    );
};

export default ExploreCourses;
