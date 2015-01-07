<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
	<title>Test Bootstrap 3</title>
	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/bootstrap-select.css" rel="stylesheet">
	<link href="css/dstyle.css" rel="stylesheet">
	<style type="text/css">
		.active{
			background:gray;
		}      
	</style>		
	<script type="text/javascript" src="js/jquery.js"></script>
</head>
<body style="padding-top: 45px;">
	<div class="row">
		<div class="helpbg">
			<div class=""><a href="#1"><div class="arrow-nav arrow-nav-std" id="arrow-nav"></div></a></div>
			<div class="container">   	
				<a name="top"></a>	
				<div class="row-gap hidden-xs"></div>
				<div class="visible-xs">
					<div class="titilium-little-header">HELP <br/>FINDING THE RIGHT WIDGETS</div>
					<div class="row-gap"></div>
				</div>					                 
				<div class="col-md-12 hidden-xs no-pad">
					<div class="titilium-header">HELP <br/>FINDING THE RIGHT WIDGETS</div>
					<div class="row-gap"></div>
				</div>
				<div class="clearfix"></div>
				<div class="row-gap"></div>
				<div class="auto-margin">
					<div class="col-md-4 col-sm-12">						
						<div class="titilium-body-header">
							<div class="numberCircle pull-left">1</div>
							<span class="pull-left titilium-subheader top-subheader">&nbsp;&nbsp;&nbsp;&nbsp;BROWSE WIDGETS</span>
						</div>
						<div class="clearfix"></div>
						<div class="row-gap"></div>
						<div class="hidden-sm hidden-xs"><img src="images/background/help/help1.png" class="img-responsive img-centered help-first"/></div>
					</div>
					<div class="col-md-4 col-sm-12">												
						<div class="titilium-body-header">
							<div class="numberCircle pull-left">2</div>
							<span class="pull-left titilium-subheader">&nbsp;&nbsp;&nbsp;&nbsp;ADD WIDGETS TO <br/>&nbsp;&nbsp;&nbsp;&nbsp;YOUR FAVOURITES</span>
						</div>
						<div class="clearfix"></div>
						<div class="row-gap"></div>
						<div class="row-gap hidden-sm hidden-xs"></div>
						<div class="hidden-sm hidden-xs"><img src="images/background/help/help2.png" class="img-responsive img-centered help-second"/></div>
					</div>				
					<div class="col-md-4 col-sm-12">																		
						<div class="titilium-body-header">
							<div class="numberCircle pull-left">3</div>
							<span class="pull-left titilium-subheader top-subheader">&nbsp;&nbsp;&nbsp;&nbsp;REQUEST AN ESTIMATE</span>
						</div>
						<div class="clearfix"></div>
						<div class="row-gap"></div>
						<div class="hidden-sm hidden-xs"><img src="images/background/help/help3.png" class="img-responsive img-centered"/></div>
					</div>
				</div>
				<div class="row-gap hidden-xs hidden-sm"></div>
				<div class="row-gap hidden-xs hidden-sm"></div>
			</div>       
		</div>
		<div class="main-body">
			<div class="container">
				<a name="1"></a>
				<div class="row-gap hidden-xs"></div>		
				<div class="row-gap"></div>		
				<div class="row-gap"></div>	
				<div class="col-md-6 col-sm-6 col-xs-12 no-pad integrate-text">
					<span class="help-header">WE DON'T HAVE A WEBSITE?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.
					<div class="row-gap"></div>		
					<span class="help-header">ARE THERE MORE WIDGETS?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.					
					<div class="row-gap"></div>		
					<span class="help-header">WE DON'T HAVE A WEBSITE?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.			
					<div class="row-gap"></div>		
					<span class="help-header">HOW SOON CAN I HAVE MY WIDGETS?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.. and maintain your complete websites.
					<div class="row-gap"></div>		
					<span class="help-header">WE DON'T HAVE A WEBSITE?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.			
					<div class="row-gap"></div>		
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12 select-pad  integrate-text">
					<span class="help-header">HOW SOON CAN I HAVE MY WIDGETS?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.. and maintain your complete websites.
					<div class="row-gap"></div>		
					<span class="help-header">ARE THERE MORE WIDGETS?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.		
					<div class="row-gap"></div>		
					<span class="help-header">HOW SOON CAN I HAVE MY WIDGETS?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.. and maintain your complete websites.
					<div class="row-gap"></div>		
					<span class="help-header">ARE THERE MORE WIDGETS?</span><br/>
					Interactive Data can develop, host and maintain your complete websites.			
				</div>
				<div class="clearfix"></div>
				<div class="row-gap"></div>		
				<div class="row-gap"></div>	
				<div class="row-gap"></div>			
				<div><a href="#top"><div class="back-text">BACK</div></a></div>
			</div>
		</div>
	</div>
 <!-- Footer -->
	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<script type='text/javascript'>
$(window).load(function(){
$('#menu > ul.nav li a').click(function(e){
var $this = $(this);
//alert('here');
$this.parent().siblings().removeClass('active').end().addClass('active');
e.preventDefault();
});
var $window = $(window);
var windowsize = $window.width();
function checkWidth() {
	var windowsize = $window.width();
	if (windowsize < 766) {
	  ///alert('SCW:/'+windowsize); 
	}
}
// Execute on load
checkWidth();
// Bind event
//alert('SCW:/'+windowsize);
$(window).resize(checkWidth);
});  
	</script>	
	<script type="text/javascript" src="js/bootstrap-select.js"></script>
	<script type="text/javascript" src="js/dcustom.js"></script>
</body>
</html>
