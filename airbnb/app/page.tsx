import Container from "./components/Container";

export default function Home() {
  return (
    <Container>
      <div
        className="
        pt-24 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-6
      "
      >
        <div>My future listings</div>
      </div>
    </Container>
  );
}
