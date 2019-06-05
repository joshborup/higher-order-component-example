import { enhancerClass } from "./enhancer";

function Displayer(props) {
  const { data } = props;
  console.log(data);
  return data;
}

export default enhancerClass(Displayer);
