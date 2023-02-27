<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />


    <!-- Add link to scheduler style -->
    <link rel="Stylesheet" type="text/css" href="../Content/calendar/calendar.stockholm.css" />

    <script type="text/javascript" src="../Scripts/Scheduler.umd.js"></script>

     <!-- Add your CSS styles to the following file -->

    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/Header.css" />

    <!-- Add your JavaScript to the following file -->


<!--    <script type="text/javascript" src="../Scripts/App.js"></script>-->

</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    BR+ Calendar View
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

     <script type="text/javascript" src="../Scripts/App.js"></script>

     <div class="nthqplaceholder">
         <div id="headerplaceholder" class="nthqheader">
             <div class="leftheader">
                 <div class="nthq_nav_row"></div>
                 <div class="nthq_tool_row">
                     <div id="filterplaceholder" class="nthqfilter"></div>
                 </div>
             </div>

             <div class="middleheader">
                 <div id="eventtaglegendplaceholder" class="nthqlegend"></div>
             </div>
             <div class="rightheader">
                 <div id="eventtypelegendplaceholder" class="nthqlegend"></div>
             </div>
         </div>

         <div id="schedulerplaceholder" class="nthqscheduler"></div>
     </div>

</asp:Content>
