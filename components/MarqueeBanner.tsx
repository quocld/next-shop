import styles from "./MarqueeBanner.module.css";

const MarqueeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 font-assistant">
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          <div className={styles.textContainer}>
            <span className="text-md font-assistant mx-20">
              Welcom join our Aurélia family! 🎉
            </span>
            <span className="text-md font-assistant mx-20">
              ⭐⭐⭐⭐⭐15k+ FIVE STARS REVIEWS
            </span>
            <span className="text-md font-assistant mx-20">
              Free shipping over $49
            </span>
            <span className="text-md font-assistant mx-20">
              Buy 2 Get 10% Off
            </span>
          </div>
          <div className={styles.textContainer}>
            <span className="text-md font-assistant mx-20">
              Welcom join our Aurélia family! 🎉
            </span>
            <span className="text-md font-assistant mx-20">
              ⭐⭐⭐⭐⭐15k+ FIVE STARS REVIEWS
            </span>
            <span className="text-md font-assistant mx-20">
              Free shipping over $49
            </span>
            <span className="text-md font-assistant mx-20">
              Buy 2 Get 10% Off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
