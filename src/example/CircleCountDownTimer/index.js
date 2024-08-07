import useCountDownTimer from "../../common/hook/useCountDownTimer";

const CircleCountDownTimer = () => {
    const [time, percent] = useCountDownTimer(10,() => {
        alert('Het gio')
    })

    return (
        <>
            <h3> Circle CountDown Timer </h3>
        </>
    )
}

export default CircleCountDownTimer