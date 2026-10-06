import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, this is Amit Tomar.
      </h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        Programmer &bull; Human Being
      </p>
      <p className="mb-4">
        {`I am currently Software Engineer at `}
        <a href="https://www.livspace.com" target="_blank" rel="noopener noreferrer">
          Livspace
        </a>
        {`, developing 3D tools on browser for home interior decoration. Till recently I was a software engineer at `}
        <a href="http://www.ck12.org/" target="_blank" rel="noopener noreferrer">
          CK-12 Foundation
        </a>
        {`, developing 2D/3D tools and interactive content for K-12 education.`}
      </p>
      <p className="mb-4">
        {`Previously I was Group Development Manager at `}
        <a href="http://www.avataar.me/" target="_blank" rel="noopener noreferrer">
          Avataar.Me
        </a>
        {`, an augmented reality company innovating on an immersive fashion mCommerce experience using cutting edge 3D computer vision technologies. I have also worked at `}
        <a href="https://www.tcs.com/tcs-research" target="_blank" rel="noopener noreferrer">
          Innovation Labs, Tata Consultancy Services
        </a>
        {`, Bangalore, designing and developing UI and middleware frameworks for In-Vehicle Infotainment systems.`}
      </p>
      <p className="mb-4">
        {`I was a masters student at `}
        <a href="http://www.iiitb.ac.in/" target="_blank" rel="noopener noreferrer">
          IIIT Bangalore
        </a>
        {`, India, where I was part of the `}
        <a href="http://www.iiitb.ac.in/GVCL/index.html" target="_blank" rel="noopener noreferrer">
          Graphic-Visualization-Computing Lab
        </a>
        {`, working with `}
        <a
          href="https://www.iiitb.ac.in/faculty_page.php?name=jayasreevalsannair"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prof. Jaya Sreevalsan-Nair
        </a>
        {`. My work involved modelling and visualizations for small world networks.`}
      </p>
      <p className="mb-4">
        {`This website serves as a platform to share information about me and some ideas via blog. You can catch me up on `}
        <a href="/contact">contact</a>
        {` or browse my `}
        <a href="/projects">projects</a>
        {`.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
