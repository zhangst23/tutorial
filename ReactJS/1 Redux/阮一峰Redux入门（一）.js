阮一峰Redux入门.js


# 一：
## （1）

曾经有人说过这样一句话。
"如果你不知道是否需要 Redux，那就是不需要它。"

Redux 的创造者 Dan Abramov 又补充了一句。
"只有遇到 React 实在解决不了的问题，你才需要 Redux 。"

简单说，如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。
用户的使用方式非常简单
用户之间没有协作
不需要与服务器大量交互，也没有使用 WebSocket
视图层（View）只从单一来源获取数据
上面这些情况，都不需要使用 Redux。


## （2）


用户的使用方式复杂
不同身份的用户有不同的使用方式（比如普通用户和管理员）
多个用户之间可以协作
与服务器大量交互，或者使用了WebSocket
View要从多个来源获取数据

上面这些情况才是 Redux 的适用场景：多交互、多数据源。


从组件角度看，如果你的应用有以下场景，可以考虑使用 Redux：

某个组件的状态，需要共享
某个状态需要在任何地方都可以拿到
一个组件需要改变全局状态
一个组件需要改变另一个组件的状态

发生上面情况时，如果不使用 Redux 或者其他状态管理工具，不按照一定规律处理状态的读写，代码很快就会变成一团乱麻。你需要一种机制，可以在同一个地方查询状态、改变状态、传播状态的变化。
总之，不要把 Redux 当作万灵丹，如果你的应用没那么复杂，就没必要用它。另一方面，Redux 只是 Web 架构的一种解决方案，也可以选择其他方案。


# 二、设计思想

Redux 的设计思想很简单，就两句话。
（1）Web 应用是一个状态机，视图与状态是一一对应的。
（2）所有的状态，保存在一个对象里面。
请务必记住这两句话，下面就是详细解释



# 三、基本概念和 API
3.1 Store
是保存数据的地方，可看成是一个容器。整个应用只能有一个Store。

3.2 State
Store对象包含所有数据。如果想得到某个时点的数据，就要对Store生成快照。这种时点的数据集合，就叫做 State。

3.3 Action
State 的变化必须是 View 导致的。 Action 就是 View 发出的通知，表示 State 应该就要发生变化了。

3.4 Action Creator
定义一个函数来生成 Action，这个函数就叫 Action Creator。

3.5 store.dispatch()
是 View 发出 Action 的唯一方法

3.6 Reducer
Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

3.7 纯函数

3.8 store.subscribe()


## 四、Store 的实现

store.getState()
store.dispatch()
store.subscribe()

//
import { createStore } from 'redux';
let { subscribe, dispatch, getState } = createStore(reducer);

//下面是createStore 方法的一个简单实现。
const createStore = (reducer) => {
	let state;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	const subscribe = (listenner) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(1 => 1 !== listener);
		}
	};

	dispatch({});

	return { getState, dispatch, subscribe };
};



五、Reducer 的拆分


六、工作流程

首先，用户发出 Action 。store.dispatch(action);
然后，Store自动调用Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State。
let nextState = todoApp(previousState, action);
State 一旦有变化，Store 就会调用监听函数。
listener 可以通过 store.getState() 得到当前状态。



七、实例： 计时器










































