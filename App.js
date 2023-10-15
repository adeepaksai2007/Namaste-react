const heading=React.createElement("h1",{id:"titile"},"I am heading 1");
const heading2=React.createElement("h1",{id:"titile2"},"I am heading 2");

const container=React.createElement("div",{id:"container"},[heading,heading2]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(container);