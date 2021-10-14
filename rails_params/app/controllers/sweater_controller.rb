class SweaterController < ApplicationController

  def christmas
    @christmas_sweater = params[:style]
  end

  # def quantity
  #   @christmas_sweater_quantity = params[:number]
  # end

  def quantity
    @christmas_sweater_quantity = params[:number]
    if @christmas_sweater_quantity.to_i > 10
    # if '8' > 10 <--- nope
      @christmas_sweater_quantity = 'a drawerful'
    else
      @christmas_sweater_quantity
    end
  end

  def outerwear
    @christmas_sweaters = params[:sweaters]
    @christmas_hoodies = params[:hoodies]
    @christmas_mittens = params[:mittens]
  end

end
