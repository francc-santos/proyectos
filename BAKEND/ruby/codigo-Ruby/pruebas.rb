=begin 
for i := 0; uint(i) < n; i++ {
    for j := 0; uint(j) < n; j++ {
        sum := 0
        if i != j {
            for s := 0; uint(s) < m; s++ {
                sum += int(inputs[s].At(0, i)) * int(inputs[s].At(0, j))
            }
        }
        data[flatIndex] = (1 / float64(n)) * float64(sum)
        flatIndex++
    }
} 
=end

m = [[1,2,3],[4,5,6],[7,8,9]]
m.each_with_index do |elemt, i|
    puts "#{i},#{elemt}"
end

for f in 0..m.count-1
    for c in 0..m[f].count-1
        sum = 0
        if c!=f
            for s in 0..m.count
                m        else 
            m[f][c]=0
        end
    end
    print "\n"
end
