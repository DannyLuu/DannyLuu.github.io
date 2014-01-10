///
// Dynamic Content Implementation of Google Analytics Tracker 
// Tracking ID:	UA-47035308-1
// 
// Use a common include or template to paste the code instead of manually adding it to every page.
// 
// PHP Implementation:
// Create a PHP file named "analyticstracking.php" with the code above and include it on each PHP 
// template page. Then,  add the following line to each template page immediately after the opening 
//  <body> tag:
// <?php include_once("analyticstracking.php") ?>
///

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47035308-1', 'deemoney.github.io');
  ga('send', 'pageview');

  alert("Google Analytics Enabled!");
</script>