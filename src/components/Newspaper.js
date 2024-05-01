import styles from '../styles/components/Newspaper.module.scss';

const Newspaper = () => {

  return (
    <div className={styles.newsContainer}>
        <img src='./images/newspaper-header.png' alt="NewsHeader" className={styles.newsHeader} />
        <div className={styles.story}>
            <h2 className={styles.headline}>Safety Meeting Ends In Accident</h2>
            <img src='./images/accident.jpg' alt="Accident" className={styles.leadingPic} />
            <p className={styles.text}>The day started with a safety meeting, that wouldn't stay safe for long! At 9:00 AM yesterday morning, Gary Black was in a hurry to arrive at the meeting room and accidentally slipped on a banana.
                Gary reportedly wobbled like a tipsy giraffe, and was sent sprawling into several nearby pot plants.</p>
        </div>
    </div>
  );
};

export default Newspaper;