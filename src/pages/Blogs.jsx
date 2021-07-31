import React from "react";
import Card from "../components/Card";
import { ReactTinyLink } from "react-tiny-link";
import useScroll from "../hooks/useScroll";

const BlogCard = ({ title, preview, source }) => (
  <div>
    <Card height="50px" width="500px">
      <div className="blog-card__title">{title}</div>
      {preview && <div className="blog-card__preview">{preview}</div>}
      {source && <div className="blog-card__source">Source: {source}</div>}
    </Card>
  </div>
);

const Blogs = () => {
  const scrollY = useScroll();

  return (
    <div id="blogs" style={{ backgroundPosition: `${scrollY}px ${-scrollY}px` }}>
      <div>
        <h1>✏️</h1>
        <h1>I've written about some of them too.</h1>
        <ul>
          <li>
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://blog.carbonfive.com/redux-minus-redux-with-react-contexts/"
              header="React + Webpack + Babble from the ground up"
              description=""
            />
          </li>
          <li>
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://blog.carbonfive.com/redux-minus-redux-with-react-contexts/"
              header="Redux Minus Redux With React Contexts"
              description="When it comes to state management in the front end, Redux has long reigned supreme. With the development of Contexts, we’re now seeing the beginning of an alternative which is brand new, but also capable of being completely familiar for long-time Redux fans. Using React Contexts with Redux-like paradigms is a good way to embrace"
            />
          </li>
          <li>
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://blog.carbonfive.com/a-tale-of-two-githubs-a-practical-guide/"
              header="A Tale of Two GitHubs: A Practical Guide"
              description="Let’s say you have two GitHub accounts: one is a work account that you use for professional projects, and the other is for your top secret hacker projects. This can cause problems like trying to push to a repository with an account that doesn’t have access or having the wrong GitHub author in your commits."
            />{" "}
          </li>
          <li>
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              maxLine={2}
              minLine={1}
              url="https://blog.carbonfive.com/writing-zsh-themes-a-quickref/"
              header="Writing ZSH Themes: A Quickref"
              description="Customizing your terminal is a fun way to streamline and personalize your digital workspace. People are more productive when using tools they enjoy and tend to value things they made themselves at a premium, but, as with all technical adventures, it can also be a little tedious to track down all the relevant documentation. This"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
