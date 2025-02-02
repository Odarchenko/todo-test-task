RSpec.describe Task, type: :model do
  describe 'validations' do
    subject { build(:task) }

    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
    it { should validate_length_of(:title).is_at_most(80) }
    it { should validate_length_of(:title).is_at_least(4) }
  end
end
