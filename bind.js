function bind(ctx){
    if(typeof this!=='function') throw new Error('调用者不是一个函数')
    const _that = this
    const args = [...arguments].slice(1)
    // return function(){
    //     const args2 = [...arguments]
    //     _that.apply(ctx,[...args,...args2])
    // }
    // 当new一个对象时，函数体内的this指向的是当前放回的函数的实例
    const bindFn = function(){
        const args2 = [...arguments]
        return _that.apply( this instanceof bindFn ? this : ctx,[...args,...args2])
    }
    const fn = function(){}
    fn.prototype = _that.prototype
    bindFn.prototype = new fn()
    return bindFn
}

//call方法啊，要能够在使用一个对象的this属性，当它直接在那个对象里就好了
function call(ctx){
    var context = Object(ctx) || window
    context.fn = this
    let result = ''
    const args = [...arguments].slice(1)
    result = ctx.fn(...args)
    delete context[fn]
    return result
}