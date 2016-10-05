require 'rails_helper'
require 'spec_helper'

describe PinsController do
  describe "GET /pins.json" do

    let( :json ){ JSON.parse( response.body ) }

    before do
      get :index, format: :json
    end

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    # You want to know that this JSON can be parsed
    it 'returns a valid JSON object' do
      expect( json ).to be_a Array
    end

    # # You want to know that this JSON has the right ID.
    # it 'returns an object with the post ID' do
    #   expect( json.id ).to be post.id
    # end


    # # checking individual fields
    # it 'returns an object with the post's id' do
    #   expect( json.id ).to eq post.id
    # end

    # it 'returns an object with the post's body' do
    #   expect( json.body ).to eq post.body
    # end

    # # and for a quick explicit list of keys, do something like this
    # it 'returns the right keys' do
    #   expect( json.body.keys ).to eq( [:id, :title, :body, :user_id] )
    # end

  end
end