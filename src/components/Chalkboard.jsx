function Chalkboard(props) {

    let lessonList = []

    if (props.list.length > 0) {

        for (let i = 0; i < 100; i++) {
            lessonList.push(<h2 key={i}>{props.list}</h2>)
        }
    }

    return lessonList
}

export default Chalkboard