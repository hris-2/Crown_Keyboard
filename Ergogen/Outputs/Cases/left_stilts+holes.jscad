function left_stilts_extrude_1_outline_fn(){
    return CAG.circle({"center":[51,-30.8],"radius":3.7})
.union(
    CAG.circle({"center":[143.5,-107.2845],"radius":4})
).union(
    CAG.circle({"center":[100.633541,-144.4216049],"radius":4})
).union(
    CAG.circle({"center":[65,-125.427],"radius":4})
).union(
    CAG.circle({"center":[143.5,-62.6845],"radius":4})
).union(
    CAG.circle({"center":[122,-19.0845],"radius":4})
).extrude({ offset: [0, 0, 1] });
}


function left_mounting_holes_extrude_1_outline_fn(){
    return CAG.circle({"center":[143.5,-107.2845],"radius":2.2})
.union(
    CAG.circle({"center":[100.633541,-144.4216049],"radius":2.2})
).union(
    CAG.circle({"center":[65,-125.427],"radius":2.2})
).union(
    CAG.circle({"center":[143.5,-62.6845],"radius":2.2})
).union(
    CAG.circle({"center":[122,-19.0845],"radius":2.2})
).union(
    CAG.circle({"center":[51,-30.8],"radius":2.2})
).extrude({ offset: [0, 0, 1] });
}




                function left_stilts+holes_case_fn() {
                    

                // creating part 0 of case left_stilts+holes
                let left_stilts+holes__part_0 = left_stilts_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_stilts+holes__part_0_bounds = left_stilts+holes__part_0.getBounds();
                let left_stilts+holes__part_0_x = left_stilts+holes__part_0_bounds[0].x + (left_stilts+holes__part_0_bounds[1].x - left_stilts+holes__part_0_bounds[0].x) / 2
                let left_stilts+holes__part_0_y = left_stilts+holes__part_0_bounds[0].y + (left_stilts+holes__part_0_bounds[1].y - left_stilts+holes__part_0_bounds[0].y) / 2
                left_stilts+holes__part_0 = translate([-left_stilts+holes__part_0_x, -left_stilts+holes__part_0_y, 0], left_stilts+holes__part_0);
                left_stilts+holes__part_0 = rotate([0,0,0], left_stilts+holes__part_0);
                left_stilts+holes__part_0 = translate([left_stilts+holes__part_0_x, left_stilts+holes__part_0_y, 0], left_stilts+holes__part_0);

                left_stilts+holes__part_0 = translate([0,0,0], left_stilts+holes__part_0);
                let result = left_stilts+holes__part_0;
                
            

                // creating part 1 of case left_stilts+holes
                let left_stilts+holes__part_1 = left_mounting_holes_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_stilts+holes__part_1_bounds = left_stilts+holes__part_1.getBounds();
                let left_stilts+holes__part_1_x = left_stilts+holes__part_1_bounds[0].x + (left_stilts+holes__part_1_bounds[1].x - left_stilts+holes__part_1_bounds[0].x) / 2
                let left_stilts+holes__part_1_y = left_stilts+holes__part_1_bounds[0].y + (left_stilts+holes__part_1_bounds[1].y - left_stilts+holes__part_1_bounds[0].y) / 2
                left_stilts+holes__part_1 = translate([-left_stilts+holes__part_1_x, -left_stilts+holes__part_1_y, 0], left_stilts+holes__part_1);
                left_stilts+holes__part_1 = rotate([0,0,0], left_stilts+holes__part_1);
                left_stilts+holes__part_1 = translate([left_stilts+holes__part_1_x, left_stilts+holes__part_1_y, 0], left_stilts+holes__part_1);

                left_stilts+holes__part_1 = translate([0,0,0], left_stilts+holes__part_1);
                result = result.subtract(left_stilts+holes__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_stilts+holes_case_fn();
            }

        
