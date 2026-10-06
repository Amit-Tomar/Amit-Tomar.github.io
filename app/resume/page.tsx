import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Amit Tomar — IT generalist with 8+ years of experience.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function DateRange({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm text-neutral-600 dark:text-neutral-400">
      {' '}
      — {children}
    </span>
  )
}

export default function ResumePage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">Resume</h1>

      <p className="mb-6">
        <a
          href="/assets/AmitTomar_Resume2019.pdf"
          className="font-medium hover:underline"
        >
          Download PDF Version
        </a>
      </p>

      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        IT generalist with 8+ years of experience in Frontend (UI, 3D Computer
        Graphics), Middleware &amp; Backend (RESTful APIs).
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        <strong>Keywords</strong>: 3D Computer Graphics, UI/UX design and
        development, Product Usability, Information and Scientific
        Visualization, Automotive Infotainments, Middleware components, RESTful
        APIs, Microservices.
      </p>

      <Section title="Education">
        <ul className="space-y-4">
          <li>
            <strong>M.Tech. in IT</strong>,{' '}
            <a href="http://www.iiitb.ac.in/" target="_blank" rel="noopener noreferrer">
              IIIT Bangalore
            </a>
            . <strong>CGPA: 3.22/4</strong>
            <DateRange>2013-2015</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              <strong>Thesis:</strong>{' '}
              <a
                href="https://www.iiitb.ac.in/GVCL/pubs/2016_AgarwalTomarSreevalsanNair_preprint.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Augmenting NodeTrix for Effective Small World Network
                Visualization
              </a>
              .
            </p>
          </li>
          <li>
            <strong>B.Tech. (Honors) in CSE</strong>,{' '}
            <a href="https://aktu.ac.in/" target="_blank" rel="noopener noreferrer">
              UP Technical University
            </a>
            . <strong>75.5%</strong>
            <DateRange>2006-2010</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              <strong>Dissertation:</strong>{' '}
              <a
                href="https://sites.google.com/site/tabatlcs/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Traffic analysis based automatic traffic light control
              </a>
            </p>
          </li>
          <li>
            <strong>Class 12th</strong>, CBSE,{' '}
            <a href="http://apsmeerut.com/" target="_blank" rel="noopener noreferrer">
              Army Public School
            </a>
            , Meerut Cantt. <strong>78.6%</strong>
            <DateRange>2004</DateRange>
          </li>
          <li>
            <strong>Class 10th</strong>, CBSE,{' '}
            <a href="http://apsmeerut.com/" target="_blank" rel="noopener noreferrer">
              Army Public School
            </a>
            , Meerut Cantt. <strong>81.6%</strong>
            <DateRange>2002</DateRange>
          </li>
        </ul>
      </Section>

      <Section title="Work Experience">
        <ul className="space-y-6">
          <li>
            <strong>SDE-III</strong>,{' '}
            <a href="https://www.livspace.com" target="_blank" rel="noopener noreferrer">
              Livspace
            </a>
            <DateRange>Nov 2020 - Currently</DateRange>
          </li>
          <li>
            <strong>Software Engineer</strong>,{' '}
            <a href="http://www.ck12.org" target="_blank" rel="noopener noreferrer">
              CK-12 Foundation
            </a>
            <DateRange>Aug 2019 - Oct 2020</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Worked on development of 2D/3D tools and interactive content for
              K-12 education.
            </p>
          </li>
          <li>
            <strong>Group Development Manager</strong>,{' '}
            <a href="http://www.avataar.me/" target="_blank" rel="noopener noreferrer">
              Avataar.Me
            </a>
            <DateRange>Dec 2015 - July 2019</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Handling the fashion-technology vertical and developing backend for
              3D graphical assets generation pipeline of virtual garments and user
              Avataars.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-400">
              <li>
                Implemented highly scalable RESTful APIs hosted over AWS for
                providing various Avataar operations as PaaS.
              </li>
              <li>
                Implemented fashion content pipeline by developing desktop based
                applications to transform and store 3D data.
              </li>
              <li>
                Implemented OpenGL/ThreeJS based renderers for user Avataar and
                apparels.
              </li>
              <li>
                Implemented several 3D graphics tools and automated tasks for
                seamless 3D content generation and consumption.
              </li>
            </ul>
          </li>
          <li>
            <strong>Technology Lead</strong>,{' '}
            <a href="http://www.avataar.me/" target="_blank" rel="noopener noreferrer">
              Avataar.Me
            </a>
            <DateRange>July 2015 - Nov 2015</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Managed design and development of tool suite for fashion team.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-400">
              <li>
                Designed and developed a graphical tool suite for apparel designing
                professionals to virtually create 3D apparels.
              </li>
              <li>
                Worked on performance analysis and enhancement of internal cloth
                simulation engine.
              </li>
            </ul>
          </li>
          <li>
            <strong>Teaching Assistant</strong>, Introductory C Programming,
            IIIT-Bangalore.
            <DateRange>July 2014</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Assisted{' '}
              <a
                href="https://www.iiitb.ac.in/faculty_page.php?name=chandrashekarramanathan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. R Chandrashekhar
              </a>{' '}
              in teaching and helped students understand and debug assignments.
            </p>
          </li>
          <li>
            <strong>Systems Engineer</strong>,{' '}
            <a
              href="http://www.tata.in/innovation/articlesinside/TCS-innovation-labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Embedded Innovation Labs
            </a>
            ,{' '}
            <a href="http://www.tcs.com" target="_blank" rel="noopener noreferrer">
              TCS
            </a>
            <DateRange>Dec 2010 - July 2013</DateRange>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Was part of design and development teams for HMI and middleware
              frameworks for several In-Vehicle Infotainment Systems.
            </p>
            <ul className="mt-2 list-disc space-y-3 pl-5 text-neutral-600 dark:text-neutral-400">
              <li>
                <strong>Next generation IVI systems for year 2020: Honda Motors R&amp;D Lab</strong>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>
                    Involved in design &amp; implementation of IPC mechanism agnostic
                    IPC Framework based on message queues.
                  </li>
                  <li>
                    Developed Auto-Code-Generator for Interprocess Communication
                    Framework.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  New generation IVI systems: Beijing Automotive Industry Holding Co.
                  Ltd.
                </strong>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>
                    Developed UI and controllers for Audio/Video Player, Web Browser,
                    Navigation, HandsFree, News Feed, Clock, Track A Friend, IP Radio,
                    Image Viewer, Application Store, Weather etc.
                  </li>
                  <li>
                    Developed System Components Manager for synchronization among
                    several system components.
                  </li>
                </ul>
              </li>
              <li>
                <strong>IVI generation II: Embedded Innovation Lab - TCS</strong>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>
                    Involved in design &amp; implementation of HMI tool agnostic HMI
                    framework.
                  </li>
                  <li>
                    Worked with the team in attaining GENIVI compliance 1.0 for TCS
                    X-86 platform.
                  </li>
                  <li>
                    Worked in the requirement gathering phase of Telematics
                    Application Framework.
                  </li>
                  <li>
                    Gave product and framework demonstrations to several prospective
                    customers.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title="Technical Skills">
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>
            <strong>Frontend —</strong> HTML, Javascript, jQuery, Bootstrap,
            D3.js, Three.js, Google-Filament, Qt, QML, OpenGL-3.3, Blender.
          </li>
          <li>
            <strong>Backend —</strong> Python, Flask, SQL-Alchemy, Redis,
            Celery, nGINX, Gunicorn, Swagger, RESTful APIs, Microservices,
            BeautifulSoup, Springboot, MySQL, Postman.
          </li>
          <li>
            <strong>Cloud —</strong> AWS (EC2, ECS, S3, Route 53, RDS, Lambda,
            Beanstalk, Cloudfront), Docker, Boto3.
          </li>
          <li>
            <strong>Systems —</strong> C, C++11, Message Queue, D-BUS,
            Microcontrollers.
          </li>
        </ul>
      </Section>

      <Section title="Open Source Contributions">
        <p className="text-neutral-600 dark:text-neutral-400">
          <a
            href="http://gcompris.net/index-en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            GCompris (A GNU package)
          </a>
          <DateRange>Jan 2014 - March 2014</DateRange>
          <br />
          Implemented the Qt Quick version of games &quot;Missing Letter&quot; and
          &quot;Tower of Hanoi&quot;,{' '}
          <a
            href="https://github.com/bdoin/GCompris-qt/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            contributing around 1000 LOC
          </a>
          .
        </p>
      </Section>

      <Section title="Publications and Patents">
        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li>
            Agarwal S., Tomar A., Sreevalsan-Nair J. (2017){' '}
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-319-50901-3_46"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                NodeTrix-Multiplex: Visual Analytics of Multiplex Small World
                Networks
              </strong>
            </a>
            . In: Cherifi H., Gaito S., Quattrociocchi W., Sala A. (eds) Complex
            Networks &amp; Their Applications V. COMPLEX NETWORKS 2016 2016.
            Studies in Computational Intelligence, vol 693. Springer, Cham.
          </li>
          <li>
            Sravanth Aluru, Gaurav Baid, Amit Tomar (2019){' '}
            <a
              href="https://patents.justia.com/patent/20190266806"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                Virtual representation creation of user for fit and style of apparel
                and accessories
              </strong>
            </a>
          </li>
        </ul>
      </Section>

      <Section title="Honors and Awards">
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>
            <strong>Most Valuable Performer of Quarter,</strong> Avataar.Me
            <DateRange>Oct-Dec 2018</DateRange>
          </li>
          <li>
            <strong>Most Valuable Performer of Quarter,</strong> Avataar.Me
            <DateRange>July-Sep 2017</DateRange>
          </li>
          <li>
            <strong>99.08 %ile in GATE 2013</strong>
            <DateRange>July 2013</DateRange>
          </li>
          <li>
            <strong>Technical Excellence Award,</strong> Embedded Innovation Lab,
            TCS
            <DateRange>June 2013</DateRange>
          </li>
          <li>
            <strong>Employee of the month,</strong> Embedded Innovation Lab, TCS
            <DateRange>Nov 2012</DateRange>
          </li>
          <li>
            <strong>Employee of the month,</strong> Embedded Innovation Lab, TCS
            <DateRange>Feb 2012</DateRange>
          </li>
        </ul>
      </Section>

      <Section title="Projects">
        <ul className="list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-400">
          <li>
            <Link href="/projects#volRendering">
              Ray casting based direct volume rendering for medical data analysis
            </Link>
          </li>
          <li>
            <Link href="/projects#emc">Visualization for Security Analytics</Link>
          </li>
          <li>
            <Link href="/projects#kernel">Minimalistic Kernel Development</Link>
          </li>
          <li>
            <Link href="/projects#copyDog">
              Copy-Dog: Augmented Suffix Tree for Software Plagiarism Checking
            </Link>
          </li>
          <li>
            <Link href="/projects#loop">
              Loop Subdivision algorithm for Interactive Surface Modeling
            </Link>
          </li>
          <li>
            <Link href="/projects#sceneGraph">
              Animating Hierarchical Object Models using Custom Scenegraph
            </Link>
          </li>
          <li>
            <Link href="/projects#tabatlc">
              Traffic Analysis Based Automatic Traffic Light Controller
            </Link>
          </li>
          <li>
            <Link href="/projects#hobby">Package of Games for Energy Saving</Link>
          </li>
        </ul>
      </Section>

      <Section title="Extra Curricular">
        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li>
            <a
              href="https://www.behance.net/gallery/14363073/IIITB-Spandan-2014"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed posters
            </a>{' '}
            and was part of PR team for annual sports meet SPANDAN at IIITB
            <DateRange>2014</DateRange>
          </li>
          <li>
            Successfully completed mini marathons:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <a
                  href="https://www.sportzify.com/city/Bengaluru/2FF574FTXh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patriot Run 10K 2016
                </a>
              </li>
              <li>
                <a
                  href="http://www.timingindia.com/beta/my-result-details/MTYxODM6dGltaW5nX3IxNTA1X2JlbncxMGtfb3Blbl8xMGs=#head"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TCS Open 10K 2015
                </a>
              </li>
              <li>
                <a
                  href="http://www.timingindia.com/beta/my-result-details/MTU0MTQ6dGltaW5nX3IxNDA1X2JlbncxMGtfZWxpdGU=#head"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TCS Open 10K 2014
                </a>
              </li>
              <li>
                <a
                  href="http://www.timingindia.com/beta/my-result-details/MTIwNDE6dGltaW5nX3IxMzA1X2JlbncxMGtfbmlrZV9mYWNlX29mZl9fbWVu#head"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TCS Open 10K 2013
                </a>
              </li>
              <li>
                <a href="http://ifim.edu.in/kanyathon/" target="_blank" rel="noopener noreferrer">
                  Kanyathon 8K 2013
                </a>
              </li>
              <li>TCS Open 5K 2012</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title="Interests">
        <ul className="list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-400">
          <li>Running</li>
          <li>Movie Reviewing</li>
          <li>Digital Painting</li>
          <li>
            <a
              href="http://www.behance.net/amitTomar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infographics
            </a>
          </li>
        </ul>
      </Section>

      <p className="text-neutral-600 dark:text-neutral-400">
        Thanks for reading! Feel free to <Link href="/contact">contact</Link> me.
      </p>
    </section>
  )
}
