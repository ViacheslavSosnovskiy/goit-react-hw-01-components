import Item from "./Statistics-item";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statlist}>
        {stats.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

// Profile.propTypes = {}

export default Statistics;

/* <ul class="stat-list">
        {stats.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>

<li class="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li> */
