import useCountDownTimer from "../../common/hook/useCountDownTimer";

const CountDownTimer = () => {
    const [time, percent] = useCountDownTimer(10, () => {
        alert('Het gio')
    })

    return (
        <div>
            <h3> {time} </h3>
            <h3> Percent: {percent} </h3>
            <h5> CountDown Timer </h5>
        </div>
    )
}

export default CountDownTimer