import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HW } from './Component';
import { Ajax } from './AjaxCall';
import { CSCallback } from './CSCallback';



function Demo() {
  console.log(this);
  return (
    <div>
      <span>
        lalala
      </span>
    </div>
  );
}


const render = (id: string, obj: any) => {
  console.log(obj);
  const vdom = (
    <div>
      <h1>
        {obj.name}
      </h1>
    </div>
  );
  ReactDOM.render(vdom,
    document.getElementById(id));
}

(window as any)['Render'] = (id: string) => {
  ReactDOM.render(Demo(),
    document.getElementById(id));
};
(window as any)['RenderReact'] = render;

(window as any)['RenderHW'] = (id: string, cb: any, nameInput?: any) => {
  ReactDOM.render(<HW {...{ name: (nameInput ? nameInput : "world"), callback: (b, f) => CSCallback(cb)(b, f) }} />, document.getElementById(id));
}

function FindReact(dom, traverseUp = 0) {
  const key = Object.keys(dom).find(key => key.startsWith("__reactInternalInstance$"));
  const domFiber = dom[key];
  if (domFiber == null) return null;

  // react <16
  if (domFiber._currentElement) {
    let compFiber = domFiber._currentElement._owner;
    for (let i = 0; i < traverseUp; i++) {
      compFiber = compFiber._currentElement._owner;
    }
    return compFiber._instance;
  }

  // react 16+
  const GetCompFiber = fiber => {
    //return fiber._debugOwner; // this also works, but is __DEV__ only
    let parentFiber = fiber.return;
    while (typeof parentFiber.type == "string") {
      parentFiber = parentFiber.return;
    }
    return parentFiber;
  };
  let compFiber = GetCompFiber(domFiber);
  for (let i = 0; i < traverseUp; i++) {
    compFiber = GetCompFiber(compFiber);
  }
  return compFiber.stateNode;
}

(window as any)['Ajax'] = Ajax;

(window as any)['CheckElement'] = (element: any) => {
  console.log(element);
  const myComp = FindReact(document.getElementById(element.id));
  console.log(document.getElementById(element.id));
  //var componentsArray = React.addons.TestUtils.findAllInRenderedTree(window.searchRoot, function () { return true; });
  console.log(myComp);
}