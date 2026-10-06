import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open source contributions and academic projects by Amit Tomar.',
}

function ProjectMeta({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  )
}

function ProjectDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-neutral-600 dark:text-neutral-400">{children}</p>
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

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Open Source Contributions
      </h2>
      <ul className="mb-10 list-disc space-y-4 pl-5">
        <li>
          <a
            href="http://gcompris.net/index-en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            GCompris (A GNU package)
          </a>
          <DateRange>Jan 2014 - March 2014</DateRange>
          <ProjectDescription>
            GCompris is a high quality, educational software suite comprising of
            numerous activities for children aged 2 to 10. Implemented the Qt Quick
            version of games &quot;Missing Letter&quot; and &quot;Tower of Hanoi&quot;,{' '}
            <a
              href="https://github.com/bdoin/GCompris-qt/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              contributing around 1000 LOC
            </a>
            .
          </ProjectDescription>
        </li>
      </ul>

      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Academic Projects
      </h2>
      <ul className="mb-10 list-disc space-y-8 pl-5">
        <li id="volRendering">
          <strong>
            Ray casting based direct volume rendering for medical data analysis
          </strong>
          <DateRange>July 2018 - Dec 2018</DateRange>
          <ProjectMeta>Technology | Language: Three.js</ProjectMeta>
          <ProjectDescription>
            Implemented ray casting based direct volume renderer to visualize 3D
            volume data. Scalar field values were mapped to color and opacity
            using interactive transfer functions. Main application area of volume
            rendering is medical imaging where volume data is obtained from
            X-ray, CT scans, PET scans etc.
          </ProjectDescription>
        </li>

        <li id="emc">
          <strong>Visualization for Security Analytics</strong>
          <DateRange>Jan 2014 - Dec 2014</DateRange>
          <ProjectMeta>
            Research collaboration between IIITB and{' '}
            <a
              href="http://www.emc.com/domains/rsa/index.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              EMC²-RSA
            </a>
          </ProjectMeta>
          <ProjectMeta>
            Team Members:{' '}
            <a
              href="https://in.linkedin.com/in/shivamlearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shivam Aggarwal
            </a>
            , guidance by{' '}
            <a
              href="https://www.iiitb.ac.in/faculty_page.php?name=jayasreevalsannair"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Jaya Sreevalsan-Nair
            </a>
          </ProjectMeta>
          <ProjectMeta>Technology | Language: D3.js</ProjectMeta>
          <ProjectDescription>
            Investigated, identified and implemented effective and intuitive
            visualizations of security analytics, ensuring that the enterprise
            security incident response teams can not only consume the security
            analytics results, but also make better informed decisions with regard
            to its correctness and criticality.
          </ProjectDescription>
        </li>

        <li id="kernel">
          <strong>Minimalistic Kernel Development</strong>
          <DateRange>Oct 2013 - Dec 2013</DateRange>
          <ProjectMeta>
            Team Members:{' '}
            <a
              href="https://in.linkedin.com/in/pankajagrawal925"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pankaj Aggarwal
            </a>
            ,{' '}
            <a
              href="https://in.linkedin.com/in/rakeshrajpurohit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rakesh Rajpurohit
            </a>
            , Ashutosh Vyas.
          </ProjectMeta>
          <ProjectMeta>Technology | Language: C</ProjectMeta>
          <ProjectMeta>
            <a
              href="https://github.com/Amit-Tomar/MinimalisticKernelDevelopment"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {' · '}
            <a
              href="http://youtu.be/bfOs_qJfGmQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Running Demo
            </a>
          </ProjectMeta>
          <ProjectDescription>
            Implemented an absolute minimal Kernel, to understand the basic
            functionality of how Kernels are developed, build, linked and loaded
            into the memory. Also wrote drivers for video display manipulation,
            interrupt handler and a programmable interval timer.
          </ProjectDescription>
        </li>

        <li id="copyDog">
          <strong>
            Copy-Dog: Augmented Suffix Tree Implementation for Software
            Plagiarism Checking
          </strong>
          <DateRange>Feb 2014 - July 2014</DateRange>
          <ProjectMeta>
            Team Members:{' '}
            <a
              href="https://in.linkedin.com/in/srinivasrvaidya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Srinivas R Vaidya
            </a>
            ,{' '}
            <a
              href="https://in.linkedin.com/in/siddheshdosi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siddhesh Dosi
            </a>
          </ProjectMeta>
          <ProjectMeta>Technology | Language: Qt, C++</ProjectMeta>
          <ProjectMeta>
            <a
              href="https://github.com/Amit-Tomar/Parametrized-String-Matching-Implementation-for-Software-Plagiarism-Check"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://www.youtube.com/watch?v=gvgXswJuV-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Running Demo
            </a>
          </ProjectMeta>
          <ProjectDescription>
            Plagiarism is a serious issue in computer science courses involving
            assessment of programming assignments. The electronic nature of these
            assignments means copying others&apos; work is very easy, and the lack
            of variation between legitimately independent solutions makes the
            detection of plagiarized solutions difficult. We implemented
            augmented Suffix Tree data structure for checking the plagiarism in
            the codes submitted to various professors at IIITB. Given a set of
            programming assignments, this implementation checks for the
            plagiarism among all the files and generates a detailed report of the
            copied code along with the file names.
          </ProjectDescription>
        </li>

        <li id="loop">
          <strong>
            Implementation of Loop Subdivision algorithm for Interactive Surface
            Modeling
          </strong>
          <DateRange>Feb 2014 - March 2014</DateRange>
          <ProjectMeta>Technology | Language: Qt, C++, OpenGL</ProjectMeta>
          <ProjectMeta>
            <a
              href="https://github.com/Amit-Tomar/Loop-Subdivision-For-Interactive-Surface-Modelling"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://www.youtube.com/watch?v=6gyJPrcR2Ps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Running Demo
            </a>
          </ProjectMeta>
          <ProjectDescription>
            Implemented an interactive program that allows the editing and
            rendering of a mesh surface. The surface is refined through
            successive subdivision using a standard subdivision scheme. User will
            be able to edit the shape of the surface by dragging &quot;control
            points&quot; of the surface.
          </ProjectDescription>
        </li>

        <li id="sceneGraph">
          <strong>
            Animating Hierarchical Object Models using Custom Scenegraph
          </strong>
          <DateRange>April 2014 - May 2014</DateRange>
          <ProjectMeta>Technology | Language: Qt, C++, OpenGL</ProjectMeta>
          <ProjectMeta>
            <a
              href="https://github.com/Amit-Tomar/Animating-Hierarchical-Object-Models-Using-Custom-Scenegraph"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://www.youtube.com/watch?v=r3AJuxILlng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Running Demo
            </a>
          </ProjectMeta>
          <ProjectDescription>
            Implemented a program to simulate the motion of an articulated robot
            that moves blocks from one conveyor belt to another. Objects were
            modelled as logical hierarchical structures and a custom scenegraph
            was implemented in the process. Simple forward kinematics was used
            to animate the robot.
          </ProjectDescription>
        </li>

        <li id="tabatlc">
          <strong>
            Traffic Analysis Based Automatic Traffic Light Controller
          </strong>
          <DateRange>Dec 2009 - May 2010</DateRange>
          <ProjectMeta>Technology | Language: Embedded C</ProjectMeta>
          <ProjectMeta>
            <a
              href="https://sites.google.com/site/tabatlcs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </ProjectMeta>
          <ProjectDescription>
            Implemented an automated traffic signal, which controlled the lights
            on the basis of traffic analysis, automatically. This system takes
            into consideration the amount of traffic on each side at a particular
            instant, unlike the existing system which has a fixed amount of time
            allocated for a side, based on one time initial calculations.
          </ProjectDescription>
        </li>
      </ul>

      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Hobby Projects
      </h2>
      <ul className="list-disc space-y-6 pl-5">
        <li id="hobby">
          <strong>Package of Games for Energy Saving</strong>
          <DateRange>Nov 2013 - Jan 2014</DateRange>
          <ProjectMeta>Technology | Language: Qt, Qml, C++</ProjectMeta>
          <ProjectMeta>
            <a
              href="https://github.com/Amit-Tomar/EnergySavingGames"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://www.youtube.com/watch?v=yJgxFFtxGkE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Energy Sudoku
            </a>
            {', '}
            <a
              href="https://www.youtube.com/watch?v=ilEE0ngcxqQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulb Buster
            </a>
            {', '}
            <a
              href="https://www.youtube.com/watch?v=cqjS9JwnXsE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart Buyer
            </a>
            {', '}
            <a
              href="https://www.youtube.com/watch?v=v7zBXvpLkJs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Energy Poly
            </a>
          </ProjectMeta>
          <ProjectDescription>
            Implemented an educational games suite for 8-15 age group, to help them
            learn about energy saving. Games comprised of &apos;Power Sudoku&apos;,
            &apos;Bulb Buster&apos;, &apos;Smart Buyer&apos;.
          </ProjectDescription>
        </li>
      </ul>
    </section>
  )
}
