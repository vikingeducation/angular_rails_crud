require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:pin) { create(:pin) }

  describe "GET #index" do
    let(:json) { JSON.parse( response.body ) }

    before do
      pin
      get :index, format: :json
    end

    it "returns http success" do
      expect(response).to have_http_status(200)
    end

    it "returns valid JSON" do
      expect(json[0]).to be_a Hash
    end
  end

end
