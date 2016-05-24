/*
 * Modified version of D3Noob's sankey program
*/

var units = "Widgets";

var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 700 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var formatNumber = d3.format(",.0f"),    // zero decimal places
    format = function(d) { return formatNumber(d) + " " + units; },
    color = d3.scale.category20();

// append the svg canvas to the page
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// Set the sankey diagram properties
var sankey = d3.sankey()
    .nodeWidth(36)
    .nodePadding(40)
    .size([width, height]);

var path = sankey.link();

// load the data (using the timelyportfolio csv method)
d3.csv("data/data.csv", function(error, data) {
  
  var dateIndex    = [];                                         //
  var workingGraph = {"nodes" : [], "links" : []};               //

  //set up graph in same style as original example but empty
  graph            = {"nodes" : [], "links" : []};

  data.forEach(function (d) {
    graph.nodes.push({ "name": d.source });
    graph.nodes.push({ "name": d.target });
    graph.links.push({ "source": d.source,
                       "target": d.target,
                       "value": +d.value });
    dateIndex.push(d.date);                                      //
  });

  // return only the distinct / unique nodes
  graph.nodes = d3.keys(d3.nest()
    .key(function (d) { return d.name; })
    .map(graph.nodes));

  // loop through each link replacing the text with its index from node
  graph.links.forEach(function (d, i) {
    graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
    graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
  });

     //now loop through each nodes to make nodes an array of objects
     // rather than an array of strings
  graph.nodes.forEach(function (d, i) {
    graph.nodes[i] = { "name": d };
  });

  dateIndex = dateIndex.removeDuplicateDates();                  //

  dateIndex.sort(function(d1, d2) {                              //
    if (d1 > d2) return 1;                                       //
    if (d1 < d2) return -1;                                      //
    return 0;                                                    //
  });                                                            //

  var numEntries = dateIndex.length;                             //

  d3.select("#timeSlider").attr("max", numEntries - 1);          //
  d3.select("#timeSlider").on("input", function() {              //
    update(+this.value);                                         //
  });                                                            //
  
  workingGraph = initialize(Math.floor(numEntries/2));           //
  
  sankey
    .nodes(workingGraph.nodes)
    .links(workingGraph.links)
    .layout(32);
  

// add in the links
  var link = svg.append("g").selectAll(".link")
      .data(workingGraph.links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", path)
      .style("stroke-width", function(d) { return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; });

// add the link titles
  link.append("title")
        .text(function(d) {
    		return d.source.name + " → " + 
                d.target.name + "\n" + format(d.value); });

// add in the nodes
  var node = svg.append("g").selectAll(".node")
      .data(workingGraph.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { 
		  return "translate(" + d.x + "," + d.y + ")"; })
    .call(d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("dragstart", function() { 
		  this.parentNode.appendChild(this); })
      .on("drag", dragmove));

// add the rectangles for the nodes
  node.append("rect")
      .attr("height", function(d) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function(d) { 
		  return d.color = color(d.name.replace(/ .*/, "")); })
      .style("stroke", function(d) { 
		  return d3.rgb(d.color).darker(2); })
    .append("title")
      .text(function(d) { 
		  return d.name + "\n" + format(d.value); });

// add in the title for the nodes
  node.append("text")
      .attr("x", -6)
      .attr("y", function(d) { return d.dy / 2; })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");

// the function for moving the nodes
  function dragmove(d) {
    d3.select(this).attr("transform", 
        "translate(" + d.x + "," + (
                d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
            ) + ")");
    sankey.relayout();
    link.attr("d", path);
  }

  function initialize(timeSlider) {
	  // to do: insulate your objects	
    var bug = {"nodes": [], "links": []};
		d3.select("#timeSlider-value").text(dateIndex[timeSlider].toDateString());
		d3.select("#timeSlider").property("value", timeSlider);
		
		var currentDate = new Date ( dateIndex[timeSlider] );
		
	//	var workingGraph = {"nodes" : [], "links" : []};
		bug.nodes = graph.nodes;
	
    var fromGraphSource, fromGraphTarget, fromGraphValue,
        toBugSource,     toBugTarget,     toBugValue;



	  var workingGraphIndex = 0;
	  for ( var i = 0; i < data.length; i++ ) {
	    var testDate = new Date( data[i].date );
		  if ( testDate.getTime() == currentDate.getTime() ) {
        // pass everything, manually, by value
        // previously, all objects pointed to graph!!

		    fromGraphSource = graph.links[i].source;
        fromGraphTarget = graph.links[i].target;
        fromGraphValue = graph.links[i].value;
        toBugSource = fromGraphSource;
        toBugTarget = fromGraphTarget;
        toBugValue = fromGraphValue;

        bug.links[workingGraphIndex] = {
          "source": toBugSource,
          "target": toBugTarget,
          "value": toBugValue
        };

			  workingGraphIndex++;
		  }
	  }
		return {"nodes": bug.nodes, "links": bug.links};
  }

  function update(timeSlider) {}
});


