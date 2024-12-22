function customRender(reactElement,mainContainer){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML= reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.children
}

const reactElement={
    type: "a",
    props: {
         href: 'https://google.com',
         target: '_blank'
    },
    children: 'Click me to visit go'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement,mainContainer)
