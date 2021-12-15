import './Main.css';

export default function Main() {
  return (
    <div className="Main">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + '/assets/LOTR_logo.png'}
        alt="Lord of the Ring Logo"
      />
    </div>
  );
}
