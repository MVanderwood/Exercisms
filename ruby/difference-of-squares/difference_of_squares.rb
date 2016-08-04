class Squares
  VERSION = File.readlines(".version").join("").to_i
  
  def initialize(n)
    @n = n
    @range = (1..@n)
    @sum = @range.reduce { |sum, n| sum + n }
  end

  def square_of_sum
    @sum**2
  end

  def sum_of_squares
    @range.map { |n| n**2 }.reduce(:+)
  end

  def difference
    return 0 if @n == 0
    square_of_sum - sum_of_squares
  end
  
end