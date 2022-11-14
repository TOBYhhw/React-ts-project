
//scss模块化引入
import style from "./comp1.module.scss"
export default function Comp1() {
    return (
        <div className={style.box}>
            <p>我是comp1</p>
        </div>
    )
}
