# 动态规划

### 策略问题

你和你的朋友面前有一排石头堆，用一个数组 piles 表示，piles[i] 表示第 i 堆石子有多少个。你们轮流拿石头，一次拿一堆，但是只能拿走最左边或者最右边的石头堆。所有石头被拿完后，谁拥有的石头多，谁获胜。
石头的堆数可以是任意正整数，石头的总数也可以是任意正整数，这样就能打破先手必胜的局面了。比如有三堆石头 piles = [1, 100, 3]，先手不管拿 1 还是 3，能够决定胜负的 100 都会被后手拿走，后手会获胜。
假设两人都很聪明，请你设计一个算法，返回先手和后手的最后得分（石头总数）之差。比如上面那个例子，先手能获得 4 分，后手会获得 100 分，你的算法应该返回 -96。

```js
class pair{
    constructor(pre,sec){
        this.pre = pre
        this.sec = sec
    }
}
function whoWin(piles){
     let n = piles.length
     let dp = Array.from(new Array(n),()=>new Array(n))
     //dp[i][j].pre 表示，对于 piles[i...j] 这部分石头堆，先手能获得的最高分数。
     //dp[i][j].sec 表示，对于 piles[i...j] 这部分石头堆，后手能获得的最高分数。
     for (let i = 0; i < n; i++) 
        for (let j = i; j < n; j++)
            dp[i][j] = new pair(0, 0);
    // 填入 base case
    for (let i = 0; i < n; i++) {
        dp[i][i].pre = piles[i];
        dp[i][i].sec = 0;
    }
    console.log(dp)
    for(let l = 2;l<=n;l++){
        for(let i = 0;i<=n-l;i++){
            let j = l+i-1
            // 当我选择了左边的堆数 则此时对于i+1 --- j 堆时 我是后手
            let left = piles[i] + dp[i+1][j].sec
            // 当我选择了右边的堆数时，此时对于i --- j-1堆时 我是后手
            let right = piles[j] + dp[i][j-1].sec
            if(left < right){
                dp[i][j].pre = right
                dp[i][j].sec = dp[i][j-1].pre
            }else{
                dp[i][j].pre = left
                dp[i][j].sec = dp[i+1][j].pre
            }
        }
    }
    let p = dp[0][n-1]
    return p.pre-p.sec
}

let piles = [3,9,1,2]
console.log(whoWin(piles))

```

### 贪心算法

小Q在进行一场竞技游戏，这场游戏的胜负关键就在于能够能争夺一条长度为L的河道，即可以看作是[0,L]的一条数轴。

这款竞技游戏当中有n个可以提供视野的道具-真视守卫，第i个真视守卫能够覆盖区间[xi,yi]。现在小Q想知道至少用几个真视守卫就可以覆盖整段河道。

输入：

输入包括n+1行。

第一行包括两个整数n和L(1<=n<=10^5,1<=L<=10^9)

接下来的n行，每行两个正整数xi，yi(0<=xi<=yi<=10^9)，表示第i个真视守卫覆盖的区间。

输出：

一个整数，表示最少需要的守卫的数量，如果无解，输出-1。

```js

// 解题的关键在于要找到 arr[i+1][0] <= arr[i][0] && arr[i+1][1] > arr[i][1] 的覆盖范围 
// 当找到一个时 并不能直接更改rowEnd 因为此时的temEnd 并不一定是符合条件的延申最长的点 所以继续往后找
// 当找不到符合条件的时 并且连第一个都不符合时 直接返回 如果找到符合条件的 再去更改rowEnd 继续往下寻找能满足条件的下一个守卫 
function greedy(){
   let l = 6
   let arr = [[3,6],[2,4],[0,2],[4,7]]
   arr.sort((a,b)=>{
       if(a[0] == b[0]) return b[1]-a[1]
       return a[0]-b[0]
   })
   let num = 0
   let rowEnd = 0
   let index = 0
   let find = false
   while(rowEnd < l){
       let temEnd = rowEnd
       for(let j = index;j<arr.length;j++){
           // 当下一个点的覆盖范围在当前点的覆盖范围之内 下一个点不算有效点 继续下一个点的寻找
           if(arr[j][1] <= rowEnd) continue
           // 当下一个点的起始覆盖范围 直接大于了当前点的覆盖范围 则说明此时找到了延续最长的点 不应该继续往下找了 要更新覆盖范围的值
           if(arr[j][0] > rowEnd) break
           // 寻找能延续范围最大的点 并标记find值 
           if(temEnd < arr[j][1]){
              find = true
              index = j
              temEnd = arr[j][1]
           }
       }
       if(!find) break
       else{
           rowEnd = temEnd
           num++
       }
   }
   return rowEnd < l?-1:num
}
console.log(greedy())
```


### 全排列 使用回溯

```js
//跟顺序无关 顺序不同 就是不同的排列
function resolve(){
        let arr = [1,2,3]
        let track = []
        let res = []
        let backTrack = (arr,track)=>{
            if(track.length == arr.length){
                res.push(track)
                return res
            }
             for(let i = 0;i<arr.length; i++){ 
                 //[1,2]再次递归时 还有可能递归到[1,2] 剪枝
                 if(track.includes(arr[i])) continue
                 track.push(arr[i])
                 backTrack(arr,track.slice())
                 track.pop()
             }
        }
        backTrack(arr,track)
    }

```

### 子集 回溯

```js
//跟顺序有关 [1,2,3]与[1,3,2]是相同的子集 需要剪枝 则下一次选择只能选择本次选择之后的值
function subsets(){
        let arr = [1,2,3]
        let track = []
        let res = []
        let backTrack = (arr,start,track)=>{
          //为了剪枝 因为[1,2,3] [1,3,2] 是同一个子集
          res.push(track)
          for(let i = start;i<arr.length;i++){
              track.push(arr[i])
              backTrack(arr,i+1,track.slice())
              track.pop()
          }

        }
    }

```


### 组合 k决定组合内数字的个数

```js
// 当[1,3] 与 [3,1]是相同的数字时 存在剪枝的问题
function combine(){
        let n = 4
        let k = 2 //解定
        let track = []
        let res = []
        // start 是为了解决剪枝的问题
        let backTrack=(start,track)=>{
            if(track.length == k){
                // 回溯递归的结束条件 
                res.push(track)
                return
            }
            for(let i = start;i<=n;i++){
                track.push(i)
                backTrack(i+1,track.slice())
                track.pop()
            }
        }
        backTrack(1,track)
    }

```

### 阔号的生成

```js

function generateParenthesis(){
        //左括号3个 右括号3个 生成3对合法的括号串的方法
        // ()()()  ((()))
        let n = 3
        let res = []
        let trace = []
        let backTrack = (left, right, trace)=>{
             if(right < left) return
             if(left<0 || right<0 )return
             if(left == 0 && right == 0){
                 res.push(track.join(''))
                 return 
             }
             trace.push('（')
             backTrack(left-1,right,trace)
             trace.pop()
             trace.push('）')
             backTrack(left,right-1,trace)
        }
        backTrack(n,n,trace)

    }

```

### 小q休息的最少天数 我要尽量少休息 多工作 并且不能两天同时工作

```js
function rest(){
        let n = 4
        let work = [0,0,1,1]
        let exercise = [0,0,1,1]
        let dp = Array.from(new Array(3),()=>new Array(n+1).fill(0))
        // dp[0][i] 第i天选择休息的最少休息天数 取决于前一天的三种选中的最少的选择休息的天数
        // dp[1][i] 第i天选择工作的最少休息天数 取决于前一天的休息 锻炼的最少的休息天数 
        // dp[2][i]
        for(let i = 1;i<=n;i++){
            dp[0][i] = Math.min(dp[0][i-1],dp[1][i-1],dp[2][i-1])+1
            //这一天可以工作 我去工作 则休息天数取决于前一天的最少休息天数
            if(work[i-1]) dp[1][i] = Math.min(dp[0][i-1],dp[2][i-1])
            //这一天不可以工作 我只能选择休息 则休息天数就要+1
            else dp[1][i] =  Math.min(dp[0][i-1],dp[2][i-1])+1
            // 这一天可以锻炼 我去锻炼 则休息天数取决于前一天的最少休息天数
            if(exercise[i-1]) dp[2][i] = Math.min(dp[0][i-1],dp[1][i-1])
            // 这一天不可以锻炼 休息天数就要加1
            else dp[2][i] = Math.min(dp[0][i-1],dp[1][i-1])+1
            console.log(dp)
        }
        return  Math.min(dp[0][4],dp[1][4],dp[2][4])

    }
    console.log(rest())

```

### 归并排序

```js
function merge_sort(){
       let ar = [4,8,6,3,2,5,7,1]
       let merge = (left,right)=>{
           let i = 0
           let j = 0
           let list = []
           // 边合并边排序
           while(i<left.length && j<right.length){
               if(left[i]<=right[j]){
                   list.push(left[i])
                   i++
               }else{
                   list.push(right[j])
                   j++
               }
           }
           if(j<right.length)
             list.push(...right.slice(j))
           if(i<left.length)
             list.push(...left.slice(i))
        return list
       }
       let slice_arr = (arr)=>{ 
           if(arr.length == 1) {return arr}
           let i = 0
           let j = arr.length-1
           let mid = i+((j-i)>>1)
           let left = slice_arr(arr.slice(i,mid+1))
           let right = slice_arr(arr.slice(mid+1))
           let res = merge(left,right)
           return res
       }
       console.log(slice_arr(ar))
   }
   merge()

```

### 快排 涉及递归

```js

 function quick(arr){
        if(arr.length<=1) return arr
        let i = 1
        let j = arr.length-1
        let flag = arr[0]
        while(i<j){
             while(arr[i]<=flag && i<j) i++
             while(arr[j]>=flag && i<j) j--
             let tem = arr[i]
             arr[i] = arr[j]
             arr[j] = tem
        }
        let left = arr.slice(1,i)
        let right = arr.slice(j)
        return [...quick(left),flag,...quick(right)]
    }
   console.log( quick([4,8,6,3,2,5,7,1,10]))

```

### 冒泡排序

```js
function bubble(){
        let arr = [4,8,6,3,2,5,7,1]
        for(let i =0;i<arr.length;i++){
            for(let j = 0;j<arr.length-i-1;j++){
               if(arr[j]>arr[j+1]){
                   let k = arr[j]
                   arr[j] = arr[j+1]
                   arr[j+1] = k
               }
            }
        }
        console.log(arr)
    }
    bubble()

```

### 选择排序

```js
function choice(){
       let arr = [4,8,6,3,2,5,7,1,10]
       for(let i =0;i<arr.length;i++){
           let minIndex = -1
           let min = arr[i]
           for(let j = i+1;j<arr.length;j++){
               //从后面的所有值中找出比当前值最小的一个值
               if(arr[j]<min){
                   min = arr[j]
                   minIndex = j
               }
           }
           if(minIndex>=0){
               let temp = arr[i]
           arr[i] = arr[minIndex]
           arr[minIndex] = temp 
           }
       }
       console.log(arr)
   }
   choice()

```

### 防抖 节流

```js
  function debace(wait = 500,fn){
       // 防抖 操作停止wait秒后才触发该函数 如果在该时间段内再次触发了该函数 则重新计算时间
       let timer = null
       return function(...args){
           if(timer) clearTimeout(timer)
           timer = setTimeout(()=>{
              fn.apply(this,args)
           },wait)
       }
  }
   function throttle(waite = 500,fn){
       //节流 保证在一定时间内一定能触发一次
       let lastTime = 0
       return function(...args){
           let now = new Date()
           if(now-lastTime>=wait){
                fn.apply(this,args)
                lastTime = now
           }
       }
   }

```

### generator 生成迭代器封装

```js
//generator
     function promise1(){
         return new Promise(resolve=>{
             resolve(4)
         })
     }
     function promise2(){
         return new Promise(resolve=>{
             resolve(5)
         })
     }

     function *g(){
         let a = yield promise1()
         let b = yield promise2()
         return 'cc'
     }
     let gen = g()
     function co(gen){
         return new Promise((resolve,reject)=>{
           function next(data){
               let {value,done} = gen.next(data)
               console.log(value,done)
               if(!done){
                   value.then(res=>{
                    console.log('a',res)
                       next(res)
                   },reject)
               }else{
                   resolve(value)
               }
           } 
            next()
         })

     }
 co(gen).then(res=>{
     console.log('gen返回的值',res)
 })

```


### _bind函数

```js
 //bind 函数 
       Function.prototype.bind = function(){
           let self = this
           let ars = Array.prototype.slice.call(arguments)
           let firstArgs = ars.slice(1)
           var temp = function(){}
           let bindFn = function(){
               let ar = Array.prototype.slice.call(arguments)
               return self.apply(this instanceof bindFn ? this : ars[0], args.concat(newArgs) )
           }
           temp.prototype = self.prototype 
           bindFn.prototype = new temp()
           return bindFN
       }
       function aa(){
           console.log(this.name) 
           console.log(arguments)
       }
       let bb = {
           name:"111"
       }
       let cc = aa.bind(bb,'123')
       let pp = new cc()
       cc('456')

```