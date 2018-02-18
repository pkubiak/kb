module DocumentsHelper
  def breadcrumbs(hierarchy)
    crumbs =
    [%(<li class="breadcrumb-item"><a href="/"><i class="fas fa-home"></i></a></li>)] +
    hierarchy[0..-2].map{ |doc| %(<li class="breadcrumb-item"><a href="#">#{doc.title}</a></li>) } + [%(<li class="breadcrumb-item active">#{hierarchy[-1].title}</li>)]

    %(<nav><ol class="breadcrumb px-3 py-2">#{crumbs.join('')}</ol></nav>).html_safe
  end
end
