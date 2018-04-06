class  SearchesController < ApplicationController

  def show
    @result = Search.result(params[:query])
  end

end
