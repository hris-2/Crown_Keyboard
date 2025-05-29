function left_xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[15.9,-139],[74.1,-139]]).appendArc([82,-146.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([82,-147.1]).appendArc([89.9,-155],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([109.0129741,-155]).appendArc([114.2397847,-156.9762806],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([126.7602153,-168.0237194]).appendArc([131.9870259,-170],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([154.1,-170]).appendArc([162,-162.1],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([162,-15.9]).appendArc([154.1,-8],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([52.9,-8]).appendArc([45,-15.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([45,-17.1]).appendArc([37.1,-25],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([15.9,-25]).appendArc([8,-32.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([8,-131.1]).appendArc([15.9,-139],{"radius":7.9,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function left_keys_extrude_1_outline_fn(){
    return new CSG.Path2D([[112.75,-43.3345],[131.25,-43.3345]]).appendPoint([131.25,-24.8345]).appendPoint([112.75,-24.8345]).appendPoint([112.75,-43.3345]).close().innerToCAG()
.union(
    new CSG.Path2D([[112.75,-62.3845],[131.25,-62.3845]]).appendPoint([131.25,-43.8845]).appendPoint([112.75,-43.8845]).appendPoint([112.75,-62.3845]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.75,-81.4345],[131.25,-81.4345]]).appendPoint([131.25,-62.9345]).appendPoint([112.75,-62.9345]).appendPoint([112.75,-81.4345]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.75,-100.4845],[131.25,-100.4845]]).appendPoint([131.25,-81.9845]).appendPoint([112.75,-81.9845]).appendPoint([112.75,-100.4845]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.75,-119.5345],[131.25,-119.5345]]).appendPoint([131.25,-101.0345]).appendPoint([112.75,-101.0345]).appendPoint([112.75,-119.5345]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.75,-40.477],[112.25,-40.477]]).appendPoint([112.25,-21.977]).appendPoint([93.75,-21.977]).appendPoint([93.75,-40.477]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.75,-59.527],[112.25,-59.527]]).appendPoint([112.25,-41.027]).appendPoint([93.75,-41.027]).appendPoint([93.75,-59.527]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.75,-78.577],[112.25,-78.577]]).appendPoint([112.25,-60.077]).appendPoint([93.75,-60.077]).appendPoint([93.75,-78.577]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.75,-97.627],[112.25,-97.627]]).appendPoint([112.25,-79.127]).appendPoint([93.75,-79.127]).appendPoint([93.75,-97.627]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.75,-116.677],[112.25,-116.677]]).appendPoint([112.25,-98.177]).appendPoint([93.75,-98.177]).appendPoint([93.75,-116.677]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.75,-35.7145],[93.25,-35.7145]]).appendPoint([93.25,-17.2145]).appendPoint([74.75,-17.2145]).appendPoint([74.75,-35.7145]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.75,-54.7645],[93.25,-54.7645]]).appendPoint([93.25,-36.2645]).appendPoint([74.75,-36.2645]).appendPoint([74.75,-54.7645]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.75,-73.8145],[93.25,-73.8145]]).appendPoint([93.25,-55.3145]).appendPoint([74.75,-55.3145]).appendPoint([74.75,-73.8145]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.75,-92.8645],[93.25,-92.8645]]).appendPoint([93.25,-74.3645]).appendPoint([74.75,-74.3645]).appendPoint([74.75,-92.8645]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.75,-111.9145],[93.25,-111.9145]]).appendPoint([93.25,-93.4145]).appendPoint([74.75,-93.4145]).appendPoint([74.75,-111.9145]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.75,-40.477],[74.25,-40.477]]).appendPoint([74.25,-21.977]).appendPoint([55.75,-21.977]).appendPoint([55.75,-40.477]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.75,-59.527],[74.25,-59.527]]).appendPoint([74.25,-41.027]).appendPoint([55.75,-41.027]).appendPoint([55.75,-59.527]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.75,-78.577],[74.25,-78.577]]).appendPoint([74.25,-60.077]).appendPoint([55.75,-60.077]).appendPoint([55.75,-78.577]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.75,-97.627],[74.25,-97.627]]).appendPoint([74.25,-79.127]).appendPoint([55.75,-79.127]).appendPoint([55.75,-97.627]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.75,-116.677],[74.25,-116.677]]).appendPoint([74.25,-98.177]).appendPoint([55.75,-98.177]).appendPoint([55.75,-116.677]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.75,-53.05],[55.25,-53.05]]).appendPoint([55.25,-34.55]).appendPoint([36.75,-34.55]).appendPoint([36.75,-53.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.75,-72.1],[55.25,-72.1]]).appendPoint([55.25,-53.6]).appendPoint([36.75,-53.6]).appendPoint([36.75,-72.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.75,-91.15],[55.25,-91.15]]).appendPoint([55.25,-72.65]).appendPoint([36.75,-72.65]).appendPoint([36.75,-91.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.75,-110.2],[55.25,-110.2]]).appendPoint([55.25,-91.7]).appendPoint([36.75,-91.7]).appendPoint([36.75,-110.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.75,-129.25],[55.25,-129.25]]).appendPoint([55.25,-110.75]).appendPoint([36.75,-110.75]).appendPoint([36.75,-129.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.75,-53.05],[36.25,-53.05]]).appendPoint([36.25,-34.55]).appendPoint([17.75,-34.55]).appendPoint([17.75,-53.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.75,-72.1],[36.25,-72.1]]).appendPoint([36.25,-53.6]).appendPoint([17.75,-53.6]).appendPoint([17.75,-72.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.75,-91.15],[36.25,-91.15]]).appendPoint([36.25,-72.65]).appendPoint([17.75,-72.65]).appendPoint([17.75,-91.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.75,-110.2],[36.25,-110.2]]).appendPoint([36.25,-91.7]).appendPoint([17.75,-91.7]).appendPoint([17.75,-110.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.75,-129.25],[36.25,-129.25]]).appendPoint([36.25,-110.75]).appendPoint([17.75,-110.75]).appendPoint([17.75,-129.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.4738871,-149.338275],[140.6457093,-161.2298458]]).appendPoint([152.5372801,-147.0580236]).appendPoint([138.3654579,-135.1664528]).appendPoint([126.4738871,-149.338275]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.1867496,-141.1882781],[125.9534437,-149.006716]]).appendPoint([133.7718816,-132.2400219]).appendPoint([117.0051875,-124.421584]).appendPoint([109.1867496,-141.1882781]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.3792826,-137.7902261],[108.5982261,-141.0027174]]).appendPoint([111.8107174,-122.7837739]).appendPoint([93.5917739,-119.5712826]).appendPoint([90.3792826,-137.7902261]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}




                function left_top_case_case_fn() {
                    

                // creating part 0 of case left_top_case
                let left_top_case__part_0 = left_xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_top_case__part_0_bounds = left_top_case__part_0.getBounds();
                let left_top_case__part_0_x = left_top_case__part_0_bounds[0].x + (left_top_case__part_0_bounds[1].x - left_top_case__part_0_bounds[0].x) / 2
                let left_top_case__part_0_y = left_top_case__part_0_bounds[0].y + (left_top_case__part_0_bounds[1].y - left_top_case__part_0_bounds[0].y) / 2
                left_top_case__part_0 = translate([-left_top_case__part_0_x, -left_top_case__part_0_y, 0], left_top_case__part_0);
                left_top_case__part_0 = rotate([0,0,0], left_top_case__part_0);
                left_top_case__part_0 = translate([left_top_case__part_0_x, left_top_case__part_0_y, 0], left_top_case__part_0);

                left_top_case__part_0 = translate([0,0,0], left_top_case__part_0);
                let result = left_top_case__part_0;
                
            

                // creating part 1 of case left_top_case
                let left_top_case__part_1 = left_keys_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_top_case__part_1_bounds = left_top_case__part_1.getBounds();
                let left_top_case__part_1_x = left_top_case__part_1_bounds[0].x + (left_top_case__part_1_bounds[1].x - left_top_case__part_1_bounds[0].x) / 2
                let left_top_case__part_1_y = left_top_case__part_1_bounds[0].y + (left_top_case__part_1_bounds[1].y - left_top_case__part_1_bounds[0].y) / 2
                left_top_case__part_1 = translate([-left_top_case__part_1_x, -left_top_case__part_1_y, 0], left_top_case__part_1);
                left_top_case__part_1 = rotate([0,0,0], left_top_case__part_1);
                left_top_case__part_1 = translate([left_top_case__part_1_x, left_top_case__part_1_y, 0], left_top_case__part_1);

                left_top_case__part_1 = translate([0,0,0], left_top_case__part_1);
                result = result.subtract(left_top_case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_top_case_case_fn();
            }

        