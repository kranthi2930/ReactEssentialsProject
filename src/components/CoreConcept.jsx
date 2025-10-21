
//CoreConcept({}) - Here '{}' - Object destructuring: different properties of the incoming object by name
//function CoreConcept(props){
export default function CoreConcept({image, title, description}){
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}