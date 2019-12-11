import moment from 'moment'

export const monthArrayMaker = (selectedDate) => {
    // console.log("SD: >utls: ", selectedDate)
    // console.log("allEvtDataCall ", x)

    const daysArr = [...new Array(moment(selectedDate).daysInMonth()).fill()]
    let m = moment(selectedDate)

    const monthDaysArray = daysArr.map((item, idx) => {
        let day = m.startOf("month").add(idx, "day").format('DD');
        let month = m.format("MM");
        let year = m.format("YYYY");
        return (
            item =
            {
                own:
                {
                    day,
                    month,
                    year,
                    fullDate: `${year}-${month}-${day}`,
                    evtArr: []
                }
            }
        )
    });
    return monthDaysArray;
}

/* EACH ITEM RETURNS AS
  {
    own: {
        month: "12",
        year: "2019",
        day: "01",
        ​​​evtArr: []
    }
​  }​​,
  {
    own: {
        month: "12",
        year: "2019",
        day: "02",
        ​​​evtArr: []
    }
​  }​​,

​​​​​*/
