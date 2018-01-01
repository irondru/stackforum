class  SearchesController < ApplicationController

  def show
    @result = Search.result(params[:query], params[:query_params])
  end

end