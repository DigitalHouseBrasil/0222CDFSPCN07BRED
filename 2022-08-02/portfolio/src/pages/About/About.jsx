import './About.scss';

function About({ name }) {
  return (
    <div className="about">
      <h2>Olá, meu nome é {name}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo elit, eget
        gravida mauris sodales vel. Sed dui libero, vulputate nec imperdiet ac, condimentum dictum
        metus. Suspendisse potenti. Integer sit amet urna nec urna semper consequat in id risus. Sed
        sed sem viverra, tempor arcu vitae, placerat diam. Aenean vitae dui eleifend, ultricies ante
        a, aliquam est. Suspendisse ac turpis ac massa posuere molestie. Vestibulum consequat tellus
        sit amet rutrum lobortis. Curabitur hendrerit quis purus id porta. Aenean bibendum velit eu
        porttitor sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Aliquam a molestie metus, eget aliquet est. Nullam elementum, massa
        sit amet lobortis egestas, nunc mauris ultrices quam, eget imperdiet lorem ex sodales urna.
        Curabitur luctus eget nulla id accumsan. Aenean efficitur neque sed finibus tincidunt. Nam
        ornare risus ac placerat mollis.
      </p>
    </div>
  );
}

export default About;
