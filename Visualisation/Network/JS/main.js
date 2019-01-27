// Add the nodes option through an event call. We want to start with the parent
// item and apply separate colors to each child element, then the same color to
// grandchildren.
Highcharts.addEvent(
    Highcharts.seriesTypes.networkgraph,
    'afterSetOptions',
    function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};
        e.options.data.forEach(function (link) {

            if (link[0] === 'Balaji Vishwanathan') {
                nodes['Balaji Vishwanathan'] = {
                    id: 'Balaji Vishwanathan',
                    marker: {
                        radius: 20
                    }
                };
                nodes[link[1]] = {
                    id: link[1],
                    marker: {
                        radius: 10
                    },
                    color: colors[i++]
                };
            } else if (nodes[link[0]] && nodes[link[0]].color) {
                nodes[link[1]] = {
                    id: link[1],
                    color: nodes[link[0]].color
                };
            }
        });

        e.options.nodes = Object.keys(nodes).map(function (id) {
            return nodes[id];
        });
    }
);

Highcharts.chart('container', {
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: 'Balaji Vishwanathan'
    },
    subtitle: {
        text: "A Versatile Personality's analysis"
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true
            }
        }
    },
    series: [{
        dataLabels: {
            enabled: true
        },
        data: [
            ['Balaji Vishwanathan', 'Invento Robotics'],
            ['Balaji Vishwanathan', 'Environment'],
            ['Balaji Vishwanathan', 'Technology'],
            ['Balaji Vishwanathan', 'Economy'],
            ['Balaji Vishwanathan', 'Culture'],
            ['Balaji Vishwanathan', 'Demography'],
            ['Balaji Vishwanathan', 'Rights, Acts and Law'],
            ['Balaji Vishwanathan', 'Great Persons'],
            ['Balaji Vishwanathan', 'Politics'],
            ['Balaji Vishwanathan', 'Cricket'],
            ['Balaji Vishwanathan', 'History'],
            ['Balaji Vishwanathan', 'India'],
            ['Balaji Vishwanathan', 'Language'],
            ['Balaji Vishwanathan', 'Government'],
            ['Balaji Vishwanathan', 'Country'],
            ['Balaji Vishwanathan', 'Plan'],
            ['Balaji Vishwanathan', 'Finance'],
            ['Balaji Vishwanathan', 'Civilization'],
            ['Balaji Vishwanathan', 'Corporates'],
            ['Balaji Vishwanathan', 'Election'],
            ['Invento Robotics', 'Mitra'],
            ['Mitra','HR Assistant'],
            ['Mitra','Robot'],
            ['Mitra','Assistant Robot'],
            ['Environment','IT Environment'],
            ['Environment','Startups'],
            ['Great Persons','Indian Personalities'],
            ['Great Persons','President'],
            ['Great Persons','Leaders'],
            ['Politics','Indian politics'],
            ['Politics','World politics'],
            ['Politics','Indian Parties'],
            ['Cricket','Bowlers'],
            ['Cricket','Batsman'],
            ['Cricket','Events'],
            ['History','Indian History'],
            ['History','World History'], 
            ['History','Historical Events'],
            ['History','Indian Revolts'],
            ['Culture','Indian Culture'],
            ['Culture','Family'],
            ['Culture','Society'],
            ['India','Market of India'],
            ['India','Diversity'],
            ['Language','Indian Language'],
            ['Language','World languages'],
            ['Government','Indian government'],
            ['Government','TN Government'],
            ['Country','Indian'],
            ['Country','US'],
            ['Plan','Govt Plans'],
            ['Plan','Online India'],
            ['Civilization','Indian Civilization'],
            ['Civilization','Historical Civilization'],
            ['Corporates','Companies'],
            ['Corporates','Top CEO'],
            ['Corporates','Products'],
            ['Corporates','Market'],
            ['Finance','World Market'],
            ['Finance','Shares'],
            ['Election','Indian Election'],
            ['Election','Parties'],
            ['Election','Indian Election'],
            ['Technology','Robotics'],
            ['Technology','Blockchain']
            ]
    }]
});

