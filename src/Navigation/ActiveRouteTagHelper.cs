using Microsoft.AspNetCore.Razor.TagHelpers;

[HtmlTargetElement("a", Attributes = "active-route")]
public class ActiveRouteTagHelper : TagHelper
{
    private readonly IHttpContextAccessor _httpContext;

    public ActiveRouteTagHelper(IHttpContextAccessor httpContext) => _httpContext = httpContext;

    [HtmlAttributeName("active-route")]
    public string? ActiveRoute { get; set; }

    [HtmlAttributeName("active-class")]
    public string ActiveClass { get; set; } = "navigation__link--active";

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        string currentURLPath = _httpContext.HttpContext?.Request.Path.Value?.TrimEnd('/') ?? "/";
        currentURLPath = string.IsNullOrEmpty(currentURLPath) ? "/" : currentURLPath;

        string targetHref = (ActiveRoute ?? output.Attributes["href"]?.Value?.ToString())?.TrimEnd('/') ?? "/";
        targetHref = string.IsNullOrEmpty(targetHref) ? "/" : targetHref;


        if (!string.IsNullOrEmpty(targetHref) && string.Equals(currentURLPath, targetHref, StringComparison.OrdinalIgnoreCase))
        {
            string className = output.Attributes["class"]?.Value?.ToString() ?? "";

            if (!className.Split(' ', StringSplitOptions.RemoveEmptyEntries).Contains(ActiveClass))
            {
                output.Attributes.SetAttribute("class", (className + " " + ActiveClass).Trim());
            }
        }
    }
}