import * as singleSpa from 'single-spa';

export default function Root(props) {
  return <section>
    <h1>Hello from React!</h1>
    <h2>I'm {props.name} application</h2>
    <p><a href="#" onClick={evt => {
      evt.preventDefault();
      singleSpa.navigateToUrl('/')
    }}>Click here to go back to Angular.</a></p>
  </section>;
}
