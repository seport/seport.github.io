import React, { createRef } from "react";
import useScroll from "@/hooks/useScroll";
import Card from "@/components/Card";

export const blogsRef = createRef<HTMLDivElement>()

const BlogCard = ({ header, description, url }: { header: string, description: string, url: string }) => <Card link={url}>
  <h3>{header}</h3>
  <p className="blog-card__description">{description}</p>
</Card>
const Blogs = () => {
  const scrollY = useScroll();

  return (
    <div id="blogs" style={{ backgroundPosition: `${scrollY}px ${-scrollY}px` }} ref={blogsRef}>
      <div className="blogs-inner">
        <h2>I've blogged about some of them too. ✏️</h2>
        <ul>
          <li>
            <BlogCard
              url="https://developers.soundcloud.com/blog/pr-templates-for-effective-pull-requests/"
              header="PR Templates for Effective Pull Requests"
              description="Empty pull request descriptions slow down teams, but PR templates are a quick and easy remedy. By streamlining the PR writing process into a series of fill-in-the-blank steps, a PR becomes a valuable asset for knowledge sharing across teams that will outlive its authors."
            />
          </li>
          <li>
            <BlogCard
              url="https://medium.com/@seport/redux-minus-redux-with-react-contexts-c8be54de0721?source=friends_link&sk=2699345cdf2467b76b999ca07ab19884"
              header="Redux Minus Redux With React Contexts"
              description="When it comes to state management in the front end, Redux has long reigned supreme. With the development of Contexts, we’re now seeing the beginning of an alternative which is brand new, but also capable of being completely familiar for long-time Redux fans. Using React Contexts with Redux-like paradigms is a good way to embrace the flexibility that Contexts provides, and gives you a chance to try out some brand new technology without having to learn brand new state management tooling and ideas right away."
            />
          </li>
          <li>
            <BlogCard
              url="https://medium.com/@seport/a-tale-of-two-githubs-a-practical-guide-0eaf0a745593?source=friends_link&sk=44501117bc719692dc06ba1f6d6c523b"
              header="A Tale of Two GitHubs: A Practical Guide"
              description="Let’s say you have two GitHub accounts: one is a work account that you use for professional projects, and the other is for your top secret hacker projects. This can cause problems like trying to push to a repository with an account that doesn’t have access or having the wrong GitHub author in your commits."
            />
          </li>
          <li>
            <BlogCard
              url="https://medium.com/@seport/writing-zsh-themes-a-quickref-4c98fdc5ddea?source=friends_link&sk=5d6c94f70bfcea8e78c20d305eaa9227"
              header="Writing ZSH Themes: A Quickref"
              description="Customizing your terminal is a fun way to streamline and personalize your digital workspace. People are more productive when using tools they enjoy and tend to value things they made themselves at a premium, but, as with all technical adventures, it can also be a little tedious to track down all the relevant documentation."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
