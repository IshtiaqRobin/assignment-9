import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked <span className='text-sky-700'>Questions</span></h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                        <details>
                            <summary className="text-lg font-semibold py-2 outline-none cursor-pointer focus:underline">What is the purpose of react router?</summary>
                            <div className="px-4 pb-4">
                                <p className='text-lg'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="text-lg font-semibold py-2 outline-none cursor-pointer focus:underline">How does Context API work?</summary>
                            <div className="px-4 pb-4">
                                <p className='text-lg'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="text-lg font-semibold py-2 outline-none cursor-pointer focus:underline">How does useRef works in React?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p className='text-lg'>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;