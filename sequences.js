// Dimensions of sunburst.
var width =1000;
var height = 800;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 150, h: 30, s: 3, t: 10
};

var lcolors = {
  "Africa":"#5687d1",
    "Americas":"#7b615c",
    "Asia":"#de783b",
    "Europe":"#6ab975",
   "Australia_and_New_Zealand":"#a3e897",
};


// Mapping of step names to colors.
var colors = {
    "Africa":"#5687d1",
    "Americas":"#7b615c",
    "Asia":"#de783b",
    "Europe":"#6ab975",
    "Oceania":"#a173d1",
    "Southern_Asia":"#aece6f",
   "Northern_Europe":"#183bab",
   "Southern_Europe":"#7a5585",
   "Northern_Africa":"#571a69",
   "Polynesia":"#d9bbe9",
   "Middle_Africa":"#4a5fa9",
   "Caribbean":"#496b20",
   "South_America":"#b31aa4",
   "Western_Asia":"#d69831",
   "Australia_and_New_Zealand":"#a3e897",
   "Western_Europe":"#d19249",
   "Eastern_Europe":"#05d754",
   "Central_America":"#c16415",
   "Western_Africa":"#d192f3",
   "Northern_America":"#632279",
   "Southern_Africa":"#b66ab4",
   "Eastern_Africa":"#21cc18",
   "South-Eastern_Asia":"#4910a6",
   "Eastern_Asia":"#c2cbc2",
   "Melanesia":"#a71a67",
   "Micronesia":"#07f46d",
   "Central_Asia":"#009794",
   "Afghanistan":"#87b847",
   "uland_Islands":"#d16bb9",
   "Albania":"#0b1b98",
   "Algeria":"#5a5813",
   "American_Samoa":"#307c3f",
   "Andorra":"#eb2a68",
   "Angola":"#0f009b",
   "Anguilla":"#840589",
   "Antarctica":"#1ffeba",
   "Antigua_and_Barbuda":"#def6f1",
   "Argentina":"#b4211a",
   "Armenia":"#2f366f",
   "Aruba":"#a39c78",
   "Australia":"#1c1c48",
   "Austria":"#ee7246",
   "Azerbaijan":"#8f5231",
   "Bahamas":"#4dd528",
   "Bahrain":"#2348e6",
   "Bangladesh":"#5e9507",
   "Barbados":"#d88d8a",
   "Belarus":"#eced79",
   "Belgium":"#94df34",
   "Belize":"#219a9e",
   "Benin":"#c025ab",
   "Bermuda":"#1cb217",
   "Bhutan":"#e9dd98",
   "Bolivia":"#9b8ef3",
   "Bonaire":"#812d4d",
   "Bosnia_and_Herzegovina":"#7f7226",
   "Botswana":"#584829",
   "Bouvet_Island":"#d82298",
   "Brazil":"#753f6f",
   "British_Indian_Ocean_Territory":"#8b756c",
   "British_Virgin_Islands":"#e37e13",
   "Brunei":"#58d10e",
   "Bulgaria":"#9a5fe6",
   "Burkina_Faso":"#5f2a79",
   "Burundi":"#05f0c2",
   "Cambodia":"#06c672",
   "Cameroon":"#f67b02",
   "Canada":"#37b2b4",
   "Cape_Verde":"#edc7a1",
   "Cayman_Islands":"#69975e",
   "Central_African_Republic":"#8e10f9",
   "Chad":"#a4c892",
   "Chile":"#987590",
   "China":"#83142a",
   "Christmas_Island":"#86abd5",
   "Cocos_(Keeling)_Islands":"#e793ac",
   "Colombia":"#27c077",
   "Comoros":"#1ee696",
   "Republic_of_the_Congo":"#d32c59",
   "Democratic_Republic_of_the_Congo":"#a86778",
   "Cook_Islands":"#95fb24",
   "Costa_Rica":"#9a7cc3",
   "Cute_d'Ivoire":"#b7fd7d",
   "Croatia":"#9b17de",
   "Cuba":"#ab0e5b",
   "Curauao":"#23f39c",
   "Cyprus":"#c84ef6",
   "Czech_Republic":"#da0d17",
   "Denmark":"#b08738",
   "Djibouti":"#05c76a",
   "Dominica":"#6499d7",
   "Dominican_Republic":"#8a7992",
   "Ecuador":"#263d56",
   "Egypt":"#b7caff",
   "El_Salvador":"#54ad18",
   "Equatorial_Guinea":"#e29964",
   "Eritrea":"#203b94",
   "Estonia":"#a6d916",
   "Ethiopia":"#4c592f",
   "Falkland_Islands":"#dee26d",
   "Faroe_Islands":"#c553e6",
   "Fiji":"#b54931",
   "Finland":"#c0520c",
   "France":"#fe92b7",
   "French_Guiana":"#d70dd6",
   "French_Polynesia":"#0407d6",
   "French_Southern_and_Antarctic_Lands":"#19898a",
   "Gabon":"#a9a949",
   "Gambia":"#6a79ee",
   "Georgia":"#7803b5",
   "Germany":"#c5eac8",
   "Ghana":"#7aa426",
   "Gibraltar":"#376e6a",
   "Greece":"#ac596d",
   "Greenland":"#60f999",
   "Grenada":"#e5654c",
   "Guadeloupe":"#c8d5a4",
   "Guam":"#d19afb",
   "Guatemala":"#f971f6",
   "Guernsey":"#11b93a",
   "Guinea":"#777378",
   "Guinea-Bissau":"#c05db0",
   "Guyana":"#63cbb7",
   "Haiti":"#6ff88f",
   "Heard_Island_and_McDonald_Islands":"#570925",
   "Vatican_City":"#5efe7a",
   "Honduras":"#f48a7c",
   "Hong_Kong":"#ee1c31",
   "Hungary":"#81ad06",
   "Iceland":"#4f6975",
   "India":"#bf0d32",
   "Indonesia":"#672f6d",
   "Iran":"#18958e",
   "Iraq":"#99a2d3",
   "Ireland":"#aa4e74",
   "Isle_of_Man":"#46be56",
   "Israel":"#9a2189",
   "Italy":"#6c269f",
   "Jamaica":"#1cb03e",
   "Japan":"#d8f8f3",
   "Jersey":"#9e5015",
   "Jordan":"#ceb0b2",
   "Kazakhstan":"#91377e",
   "Kenya":"#1ed5ab",
   "Kiribati":"#e61968",
   "Kuwait":"#983646",
   "Kyrgyzstan":"#b64efd",
   "Laos":"#d77be0",
   "Latvia":"#5eefea",
   "Lebanon":"#7ccec4",
   "Lesotho":"#d6c9ac",
   "Liberia":"#74c7c4",
   "Libya":"#4a9843",
   "Liechtenstein":"#370aeb",
   "Lithuania":"#0b60b4",
   "Luxembourg":"#7382db",
   "Macau":"#d808d9",
   "Macedonia":"#1e6423",
   "Madagascar":"#b0da78",
   "Malawi":"#bf1310",
   "Malaysia":"#3edd13",
   "Maldives":"#bfc0ef",
   "Mali":"#372dac",
   "Malta":"#793bf7",
   "Marshall_Islands":"#d77da1",
   "Martinique":"#031fd2",
   "Mauritania":"#e7047f",
   "Mauritius":"#056031",
   "Mayotte":"#0cdc14",
   "Mexico":"#ea9e4a",
   "Micronesia":"#090ebf",
   "Moldova":"#890e39",
   "Monaco":"#271a35",
   "Mongolia":"#d5a8b3",
   "Montenegro":"#153ff0",
   "Montserrat":"#4ed89f",
   "Morocco":"#a399c7",
   "Mozambique":"#c8add2",
   "Myanmar":"#b6961d",
   "Namibia":"#416416",
   "Nauru":"#18f7d4",
   "Nepal":"#894ba8",
   "Netherlands":"#c169d6",
   "New_Caledonia":"#a9ed89",
   "New_Zealand":"#1b8b97",
   "Nicaragua":"#170d92",
   "Niger":"#40f98b",
   "Nigeria":"#cad265",
   "Niue":"#c27827",
   "Norfolk_Island":"#8486d2",
   "North_Korea":"#813846",
   "Northern_Mariana_Islands":"#f059c3",
   "Norway":"#b901b4",
   "Oman":"#992606",
   "Pakistan":"#8fe727",
   "Palau":"#ad3346",
   "Palestine":"#fe6e6f",
   "Panama":"#0efb99",
   "Papua_New_Guinea":"#3abf47",
   "Paraguay":"#cf6e7d",
   "Peru":"#28aa32",
   "Philippines":"#1b8a15",
   "Pitcairn_Islands":"#43d410",
   "Poland":"#7ad87a",
   "Portugal":"#17633c",
   "Puerto_Rico":"#3931e6",
   "Qatar":"#32c6fb",
   "Republic_of_Kosovo":"#e94774",
   "Runion":"#cc1b2a",
   "Romania":"#817b44",
   "Russia":"#52da2c",
   "Rwanda":"#b08628",
   "Saint_Barthlemy":"#18bd20",
   "Saint_Helena":"#e1662c",
   "Saint_Kitts_and_Nevis":"#c999d7",
   "Saint_Lucia":"#2f8404",
   "Saint_Martin":"#c97f54",
   "Saint_Pierre_and_Miquelon":"#7df434",
   "Saint_Vincent_and_the_Grenadines":"#c5f43e",
   "Samoa":"#6c9653",
   "San_Marino":"#f19841",
   "Suo_Tom_and_Pruedncipe":"#f91d31",
   "Saudi_Arabia":"#5528ee",
   "Senegal":"#c3f7aa",
   "Serbia":"#a5918f",
   "Seychelles":"#1879d6",
   "Sierra_Leone":"#080e78",
   "Singapore":"#abb1ee",
   "Sint_Maarten":"#a3c6a3",
   "Slovakia":"#67353b",
   "Slovenia":"#bd5b0e",
   "Solomon_Islands":"#214aae",
   "Somalia":"#3ea094",
   "South_Africa":"#2f5b05",
   "South_Georgia":"#997396",
   "South_Korea":"#de4638",
   "South_Sudan":"#6f6113",
   "Spain":"#5a7887",
   "Sri_Lanka":"#128006",
   "Sudan":"#fa4303",
   "Suriname":"#f148ca",
   "Svalbard_and_Jan_Mayen":"#dc6fad",
   "Swaziland":"#43a6c3",
   "Sweden":"#42922b",
   "Switzerland":"#e75431",
   "Syria":"#89d308",
   "Taiwan":"#727fb5",
   "Tajikistan":"#fdd215",
   "Tanzania":"#63cd52",
   "Thailand":"#18c074",
   "Timor-Leste":"#c5ca57",
   "Togo":"#18435f",
   "Tokelau":"#78bbbc",
   "Tonga":"#790437",
   "Trinidad_and_Tobago":"#1e3ece",
   "Tunisia":"#45fba9",
   "Turkey":"#c69c70",
   "Turkmenistan":"#ff7d6c",
   "Turks_and_Caicos_Islands":"#68fcaa",
   "Tuvalu":"#5cb2e7",
   "Uganda":"#f2e51b",
   "Ukraine":"#e37e78",
   "United_Arab_Emirates":"#c6880c",
   "United_Kingdom":"#6ce9ee",
   "United_States":"#d176be",
   "United_States_Minor_Outlying_Islands":"#90dd2f",
   "United_States_Virgin_Islands":"#8f8d9d",
   "Uruguay":"#e62b28",
   "Uzbekistan":"#919cc6",
   "Vanuatu":"#31a383",
   "Venezuela":"#1d6e0b",
   "Vietnam":"#a9586a",
   "Wallis_and_Futuna":"#0a170e",
   "Western_Sahara":"#c52faf",
   "Yemen":"#82dcae",
   "Zambia":"#6a3128",
   "Zimbabwe":"#8915e9"
};


// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.partition()
    .size([2 * Math.PI, radius * radius]);

var arc = d3.arc()
    .startAngle(function(d) { return d.x0; })
    .endAngle(function(d) { return d.x1; })
    .innerRadius(function(d) { return Math.sqrt(d.y0); })
    .outerRadius(function(d) { return Math.sqrt(d.y1); });

// Use d3.text and d3.csvParseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("./data/sunbrust.csv", function(text) {
  var csv = d3.csvParseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // Turn the data into a d3 hierarchy and calculate the sums.
  var root = d3.hierarchy(json)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });
  
  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition(root).descendants()
      .filter(function(d) {
          return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.data.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.datum().value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = d.ancestors().reverse();
  sequenceArray.shift(); // remove root node from the array
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .on("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var trail = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.data.name + d.depth; });

  // Remove exiting nodes.
  trail.exit().remove();

  // Add breadcrumb and label for entering nodes.
  var entering = trail.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.data.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.data.name; });

  // Merge enter and update selections; set position for all nodes.
  entering.merge(trail).attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 180, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(lcolors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(lcolors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};
