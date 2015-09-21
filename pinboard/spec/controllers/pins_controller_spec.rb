require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:user){ create(:user)}
  let(:pin){ create(:pin)}
  let(:json){ JSON.parse(response.body) }

  context 'render pins index' do

    describe 'GET /pins' do

      before do
        get :index, format: :json
      end

      it 'should return a collection of pins' do

      end

    end

  end  # end context

end
