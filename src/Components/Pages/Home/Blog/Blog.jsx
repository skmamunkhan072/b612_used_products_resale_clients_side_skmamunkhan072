import React from "react";

const Blog = () => {
  return (
    <section class="overflow-hidden text-gray-700 my-10">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="lg:flex lg:flex-wrap -m-1 md:-m-2">
          <div class="lg:flex lg:flex-wrap lg:w-2/4  rounded-lg bg-gray-600 p-4">
            <div class="w-full p-4 md:p-2">
              <h1 className="text-3xl  text-gray-400 mt-2">
                What are the different ways to manage a state in a React
                application?
              </h1>
              <p className="text-xl text-start text-gray-400 mt-2">
                Not only are there are a lot of different kinds of state, but
                there often dozens of ways of managing each kind. Which should
                you choose? In this guide, we will uncover the several kinds of
                state in your React apps that you might not be aware of, plus
                how to manage them in the most effective way. To do it, remove
                state from both of them, move it to their closest common parent,
                and then pass it down to them via props. This is known as
                “lifting state up
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:w-2/4 rounded-lg bg-gray-600 p-4">
            <div class="w-full p-4 md:p-2">
              <h1 className="text-3xl  text-gray-400 mt-2">
                How does prototypical inheritance work?
              </h1>
              <p className="text-xl text-start text-gray-400 mt-2">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:w-2/4  rounded-lg bg-gray-600 p-4">
            <div class="w-full p-4 md:p-2">
              <h1 className="text-3xl  text-gray-400 mt-2">
                What is a unit test? Why should we write unit tests?
              </h1>
              <p className="text-xl text-start text-gray-400 mt-2">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:w-2/4  rounded-lg bg-gray-600 p-4 ">
            <div class="w-full p-4 md:p-2">
              <h1 className="text-3xl  text-gray-400 mt-2">
                React vs. Angular vs. Vue?
              </h1>
              <p className="text-xl text-start text-gray-400 mt-2">
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
