import '../App.css'; // Importeer de CSS-stijlen

const Contact = () => {
  return (
    <div className="mainContent">
      <h1 className="mainHeading">Contact</h1>
      <p className="mainText">
        Neem contact met ons op via de onderstaande gegevens. We horen graag van je!
      </p>
      <p className="mainText">
        <strong>Email:</strong> info@jtindustries.com
        <br />
        <strong>Telefoon:</strong> +31 6 12345678
        <br />
        <strong>Adres:</strong> 3D Straat 1, Amsterdam
      </p>
    </div>
  );
};

export default Contact;